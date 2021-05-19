import clownface from 'clownface'
import RDF from '@rdfjs/dataset'
import ParsingClient from 'sparql-http-client/ParsingClient'
import TermSet from '@rdfjs/term-set'
import { shrink } from '@zazuko/rdf-vocabularies/shrink'
import { tablesFromSHACL } from '@/shacl'
import { rdf, schema, spex, prefixes as _prefixes } from './namespace'

const SCHEMA_URI = '.well-known/void'

const initialPrefixes = [...Object.keys(_prefixes)]
const displayLanguage = ['en', '*']

export class Endpoint {
  constructor ({ url, user = null, password = null, prefixes = [], graph = '', forceIntrospection = false }) {
    this.url = url
    this.user = user
    this.password = password
    this.prefixes = prefixes
    this.graph = graph
    this.client = new ParsingClient({ endpointUrl: url, user, password })
    this.forceIntrospection = forceIntrospection

    // Reinitialize prefixes
    Object.keys(_prefixes).forEach((prefix) => {
      if (!initialPrefixes.includes(prefix)) {
        delete _prefixes[prefix]
      }
    })

    // Apply custom prefixes
    prefixes.forEach(({ prefix, url }) => {
      _prefixes[prefix] = url
    })
  }

  shrink (uri) {
    return shrink(uri) || uri
  }

  /**
   * Fetch a list of graphs in the endpoint
   */
  async fetchGraphs (opts = {}) {
    const offset = opts.offset || 0
    const limit = opts.limit || null

    const query = `
      SELECT DISTINCT ?g
      WHERE {
        GRAPH ?g { ?s ?p ?o }
      }
      ORDER BY ?g
      OFFSET ${offset}
      LIMIT ${limit}
    `
    const graphs = await this.client.query.select(query)
    return graphs.map(({ g: { value } }) => value)
  }

  /**
   * Fetch data model, either by introspecting it or by querying the
   * pre-defined SHACL definition
   */
  async fetchDatamodel () {
    if (this.forceIntrospection) {
      return this.fetchIntrospectDatamodel()
    }

    const datamodel = await this.fetchPredefinedDatamodel()

    return datamodel.tables
      ? datamodel
      : this.fetchIntrospectDatamodel()
  }

  /**
   * Fetch data model from pre-defined SHACL definition
   */
  async fetchPredefinedDatamodel () {
    const schemaURI = this.url.replace(/query\/?$/, SCHEMA_URI)
    const fromClause = this.graph ? `FROM <${this.graph}>` : ''
    const query = `
      #pragma describe.strategy cbd
      DESCRIBE <${schemaURI}>
      ${fromClause}
    `
    const quads = await this.client.query.construct(query)
    const dataset = clownface({
      dataset: RDF.dataset(quads),
      term: RDF.namedNode(schemaURI),
    })

    const defaultShapes = dataset.out(spex.shape).has(rdf.type, spex.DefaultShapes)
    const tables = defaultShapes.term
      ? tablesFromSHACL(defaultShapes.out(schema.hasPart), this)
      : null

    const viewports = dataset.out(spex.viewport).map(viewport => ({
      name: viewport.out(schema.name, { language: displayLanguage }).value,
      tables: new Set(viewport.out(spex.includes).terms.map(({ value }) => value)),
    }))

    return {
      tables,
      viewports,
      isIntrospected: false,
    }
  }

  /**
   * Fetch data model by introspecting the endpoint
   */
  async fetchIntrospectDatamodel () {
    const structure = await this._fetchStructure()
    const tablesMap = structure.reduce((tables, { cls, property, linktype, datatype }) => {
      const table = tables.get(cls.value) || { id: cls.value, name: this.shrink(cls.value), properties: new Map(), isShown: true }

      const typeURI = (linktype && linktype.value) || (datatype && datatype.value) || null
      const typeTermType = linktype ? 'NamedNode' : (datatype ? 'Literal' : null)
      const type = typeURI && { id: typeURI, name: this.shrink(typeURI), termType: typeTermType }

      if (table.properties.has(property.value)) {
        if (type) {
          table.properties.get(property.value).values.push(type)
        }
      } else {
        table.properties.set(property.value, {
          id: property.value,
          name: this.shrink(property.value),
          values: type ? [type] : []
        })
      }

      tables.set(cls.value, table)

      return tables
    }, new Map())

    const tables = [...tablesMap.values()].map((table) => ({ ...table, properties: [...table.properties.values()] }))

    return {
      tables,
      viewports: [],
      isIntrospected: true,
    }
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

  /**
   * Fetch a sample of the data of a given table
   */
  async fetchTableData (table, opts = {}) {
    const limit = opts.limit || 100
    const graphClause = this.graph ? `GRAPH <${this.graph}>` : ''
    const query = `
      DESCRIBE ?subject {
        {
          SELECT ?subject
          WHERE {
            ${graphClause} {
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

  /**
   * Fetch triples related to a given resource.
   */
  async fetchResource (uri) {
    const query = `
      DESCRIBE <${uri}> {}
    `
    const quads = await this.client.query.construct(query)

    const properties = quads.reduce((acc, { predicate, object }) => {
      if (!acc.has(predicate.value)) {
        const property = {
          id: predicate.value,
          term: predicate,
          name: this.shrink(predicate.value),
          values: [],
        }
        acc.set(predicate.value, property)
      }

      acc.get(predicate.value).values.push(object)

      return acc
    }, new Map())

    const term = { value: uri, termType: 'NamedNode' }

    return {
      id: uri,
      term,
      name: this.shrink(term.value),
      properties: [...properties.values()],
    }
  }
}
