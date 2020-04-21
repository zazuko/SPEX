import SparqlClient from 'sparql-http-client'
import { shrink, prefixes } from '@zazuko/rdf-vocabularies'
import config from '@/config'

Object.keys(config.prefixes).forEach((prefix) => {
  prefixes[prefix] = config.prefixes[prefix]
})

async function fetchStructure (endpoint, user, password, graph) {
  const query = `
    SELECT DISTINCT ?cls ?property ?linktype ?datatype {
      GRAPH <${graph}> {
        ?subject a ?cls .
        ?subject ?property ?object .

        OPTIONAL {
          ?object a ?linktype .
        }

        BIND(DATATYPE(?object) AS ?datatype)
      }
    }
  `
  const client = new SparqlClient({ endpointUrl: endpoint, user, password })
  const stream = await client.query.select(query.toString())

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

export async function fetchTables (endpoint, user, password, graph) {
  const structure = await fetchStructure(endpoint, user, password, graph)
  const tables = structure.reduce((tables, { cls, property, linktype, datatype }) => {
    const table = tables.get(cls.value) || { id: cls.value, name: shrink(cls.value), columns: [] }

    table.columns.push({
      id: property.value,
      name: shrink(property.value),
      datatype: (linktype && linktype.value) || (datatype && datatype.value)
    })

    tables.set(cls.value, table)

    return tables
  }, new Map())

  return [...tables.values()]
}
