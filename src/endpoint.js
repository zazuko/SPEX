import ParsingClient from 'sparql-http-client/ParsingClient'
import TermSet from '@rdfjs/term-set'
import { shrink, prefixes as _prefixes } from '@zazuko/rdf-vocabularies'

export class Endpoint {
  constructor ({ url, user = null, password = null, prefixes = [], graph = '' }) {
    this.url = url
    this.user = user
    this.password = password
    this.prefixes = prefixes
    this.graph = graph
    this.client = new ParsingClient({ endpointUrl: url, user, password })

    prefixes.forEach(({ prefix, url }) => {
      _prefixes[prefix] = url
    })
  }

  shrink (uri) {
    return shrink(uri) || uri
  }

  async fetchTables () {
    const structure = await this._fetchStructure()
    const tables = structure.reduce((tables, { cls, property, linktype, datatype }) => {
      const table = tables.get(cls.value) || { id: cls.value, name: this.shrink(cls.value), columns: new Map() }

      const type = (linktype && linktype.value) || (datatype && datatype.value) || ''
      if (table.columns.has(property.value)) {
        table.columns.get(property.value).types.push({ id: type, name: this.shrink(type) })
      } else {
        table.columns.set(property.value, {
          id: property.value,
          name: this.shrink(property.value),
          types: [{ id: type, name: this.shrink(type) }]
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
    const fromClause = this.graph ? `FROM <${this.graph}>` : ''
    const query = `
      DESCRIBE ?subject {
        {
          SELECT ?subject
          ${fromClause}
          WHERE {
            ?subject a <${table.id}>
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
}
