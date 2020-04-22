import SparqlClient from 'sparql-http-client'
import TermSet from '@rdfjs/term-set'
import { shrink, prefixes } from '@zazuko/rdf-vocabularies'
import config from '@/config'

Object.keys(config.prefixes).forEach((prefix) => {
  prefixes[prefix] = config.prefixes[prefix]
})

async function fetchQuery (query, { endpoint, user, password }) {
  const client = new SparqlClient({ endpointUrl: endpoint, user, password })
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

async function fetchStructure (options) {
  const graphURI = options.graph ? `<${options.graph}>` : '?graph'
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
  return fetchQuery(query, options)
}

export async function fetchTables (options) {
  const structure = await fetchStructure(options)
  const tables = structure.reduce((tables, { cls, property, linktype, datatype }) => {
    const table = tables.get(cls.value) || { id: cls.value, name: shrinkURI(cls.value), columns: [] }

    const type = (linktype && linktype.value) || (datatype && datatype.value) || ''
    table.columns.push({
      id: property.value,
      name: shrinkURI(property.value),
      type: { id: type, name: shrinkURI(type) }
    })

    tables.set(cls.value, table)

    return tables
  }, new Map())

  return [...tables.values()]
}

export function shrinkURI (uri) {
  return shrink(uri) || uri
}

export async function fetchTableData (table, options) {
  const limit = 100
  const predicates = table.columns.map(({ id }) => id)
  const graphURI = options.graph ? `<${options.graph}>` : '?graph'
  const variables = predicates.map((pred, index) => `v${index}`)
  const predicatesMapping = predicates.map((predicate, index) => `<${predicate}> ?${variables[index]}`).join(' ;\n')
  const query = `
    SELECT ?subject ${variables.map(v => `?${v}`).join(' ')} {
      GRAPH ${graphURI} {
        ?subject a <${table.id}> ;
          ${predicatesMapping} .
      }
    } LIMIT ${limit}
  `
  const results = await fetchQuery(query, options)

  const rows = results.reduce((acc, result) => {
    const subject = result.subject.value
    const row = acc.get(subject) || { id: subject }

    predicates.forEach((predicate, index) => {
      if (!row[predicate]) {
        row[predicate] = new TermSet()
      }

      const term = result[variables[index]]
      row[predicate].add(term)
    })

    acc.set(subject, row)
    return acc
  }, new Map())

  return [...rows.values()]
}
