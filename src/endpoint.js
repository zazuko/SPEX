import RDF from 'rdf-ext'
import ParsingClient from 'sparql-http-client/ParsingClient'
import TermSet from '@rdfjs/term-set'
import { shrink, prefixes as _prefixes } from '@zazuko/rdf-vocabularies'
import { tablesFromSHACL } from '@/shacl'

const SCHEMA_URI = '.well-known/schema'

export class Endpoint {
  constructor ({ url, user = null, password = null, prefixes = [], graph = '', forceIntrospection = false }) {
    this.url = url
    this.user = user
    this.password = password
    this.prefixes = prefixes
    this.graph = graph
    this.client = new ParsingClient({ endpointUrl: url, user, password })
    this.forceIntrospection = forceIntrospection

    prefixes.forEach(({ prefix, url }) => {
      _prefixes[prefix] = url
    })
  }

  shrink (uri) {
    return shrink(uri) || uri
  }

  async fetchTables () {
    if (this.forceIntrospection) {
      return this.introspectTables()
    }

    const tables = await this.fetchSHACL()

    return tables.length > 0
      ? tables
      : this.introspectTables()
  }

  /**
   * Retrieve table structure from pre-defined SHACL definition.
   */
  async fetchSHACL () {
    const schemaURI = this.url.replace(/query\/?$/, SCHEMA_URI)
    const fromClause = this.graph ? `FROM <${this.graph}>` : ''
    const query = `
      #pragma describe.strategy cbd
      DESCRIBE <${schemaURI}>
      ${fromClause}
    `
    const quads = await this.client.query.construct(query)
    const dataset = RDF.dataset(quads)

    return tablesFromSHACL(dataset, this)
  }

  async introspectTables () {
    const structure = await this._fetchStructure()
    const tables = structure.reduce((tables, { cls, property, linktype, datatype }) => {
      const table = tables.get(cls.value) || { id: cls.value, name: this.shrink(cls.value), columns: new Map() }

      const typeURI = (linktype && linktype.value) || (datatype && datatype.value) || null
      const typeTermType = linktype ? 'NamedNode' : (datatype ? 'Literal' : null)
      const type = typeURI && { id: typeURI, name: this.shrink(typeURI), termType: typeTermType }

      if (table.columns.has(property.value)) {
        if (type) {
          table.columns.get(property.value).types.push(type)
        }
      } else {
        table.columns.set(property.value, {
          id: property.value,
          name: this.shrink(property.value),
          types: type ? [type] : []
        })
      }

      tables.set(cls.value, table)

      return tables
    }, new Map())

    return [...tables.values()].map((table) => ({ ...table, columns: [...table.columns.values()] }))
  }

  async _fetchStructure () {
    const fromClause = this.graph ? `FROM <${this.graph}>` : ''
    const query = `
      SELECT DISTINCT ?cls ?property ?linktype ?datatype
      ${fromClause}
      WHERE {
        ?subject a ?cls .
        ?subject ?property ?object .

        OPTIONAL {
          ?object a ?linktype .
        }

        BIND(DATATYPE(?object) AS ?datatype)
      }
    `
    return this.client.query.select(query)
  }

  async fetchTableData (table) {
    const limit = 100
    const graph = this.graph ? `<${this.graph}>` : '?g'
    const query = `
      DESCRIBE ?subject {
        {
          SELECT ?subject
          WHERE {
            GRAPH ${graph} {
              ?subject a <${table.id}>
            }
          }
          LIMIT ${limit}
        }
      }
    `
    const results = await this.client.query.construct(query)

    const rows = results.reduce((acc, { subject: { value: subject }, predicate: { value: predicate }, object }) => {
      const row = acc.get(subject) || { id: subject }

      if (!row[predicate]) {
        row[predicate] = new TermSet()
      }

      row[predicate].add(object)

      acc.set(subject, row)
      return acc
    }, new Map())

    return [...rows.values()]
  }

  async fetchResource (uri) {
    const query = `
      DESCRIBE <${uri}> {}
    `
    const quads = await this.client.query.construct(query)

    const properties = quads.reduce((acc, { predicate, object }) => {
      if (!acc.has(predicate.value)) {
        acc.set(predicate.value, { id: predicate.value, term: predicate, values: [] })
      }

      acc.get(predicate.value).values.push(object)

      return acc
    }, new Map())

    const term = { value: uri, termType: 'NamedNode' }

    return { id: uri, term, properties: [...properties.values()] }
  }
}
