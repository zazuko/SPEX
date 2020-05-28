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
      const table = tables.get(cls.value) || { id: cls.value, name: this.shrink(cls.value), columns: [] }

      const type = (linktype && linktype.value) || (datatype && datatype.value) || ''
      table.columns.push({
        id: property.value,
        name: this.shrink(property.value),
        type: { id: type, name: this.shrink(type) }
      })

      tables.set(cls.value, table)

      return tables
    }, new Map())

    return [...tables.values()]
  }

  async _fetchStructure () {
    const graphURI = this.graph ? `<${this.graph}>` : '?graph'
    const query = `
      SELECT DISTINCT ?cls ?property ?linktype ?datatype {
        GRAPH ${graphURI} {
          ?subject a ?cls .
          ?subject ?property ?object .

          OPTIONAL {
            ?object a ?linktype .
          }

          BIND(DATATYPE(?object) AS ?datatype)
        }
      }
    `
    return this.client.query.select(query)
  }

  async fetchTableData (table) {
    const limit = 100
    const graphURI = this.graph ? `<${this.graph}>` : '?graph'
    const query = `
      DESCRIBE ?subject {
        {
          SELECT ?subject {
            GRAPH ${graphURI} { ?subject a <${table.id}> }
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
