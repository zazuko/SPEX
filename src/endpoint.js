import SparqlClient from 'sparql-http-client'
import TermSet from '@rdfjs/term-set'
import { shrink, prefixes as _prefixes } from '@zazuko/rdf-vocabularies'

export class Endpoint {
  constructor ({ url, user = null, password = null, prefixes = [], graph = '' }) {
    this.url = url
    this.user = user
    this.password = password
    this.prefixes = prefixes
    this.graph = graph
    this.client = new SparqlClient({ endpointUrl: url, user, password })

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
    return fetchQuery(this.client, query)
  }

  async fetchTableData (table) {
    const limit = 100
    const predicates = table.columns.map(({ id }) => id)
    const graphURI = this.graph ? `<${this.graph}>` : '?graph'
    const variables = predicates.map((pred, index) => `v${index}`)
    const predicatesMapping = predicates.map((predicate, index) => `OPTIONAL { ?subject <${predicate}> ?${variables[index]} }`).join('\n')
    const query = `
      SELECT ?subject ${variables.map(v => `?${v}`).join(' ')}
      WHERE {
        GRAPH ${graphURI} {
          ?subject a <${table.id}> .
          ${predicatesMapping}
        }
      } LIMIT ${limit}
    `
    const results = await fetchQuery(this.client, query)

    const rows = results.reduce((acc, result) => {
      const subject = result.subject.value
      const row = acc.get(subject) || { id: subject }

      predicates.forEach((predicate, index) => {
        if (!row[predicate]) {
          row[predicate] = new TermSet()
        }

        const term = result[variables[index]]
        if (term) {
          row[predicate].add(term)
        }
      })

      acc.set(subject, row)
      return acc
    }, new Map())

    return [...rows.values()]
  }
}

async function fetchQuery (client, query) {
  const stream = await client.query.select(query)

  return new Promise((resolve, reject) => {
    const results = []

    stream.on('data', (result) => {
      results.push(result)
    })

    stream.on('error', (error) => {
      reject(error)
    })

    stream.on('end', () => {
      resolve(results)
    })
  })
}
