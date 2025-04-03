import { shrink } from '@zazuko/prefixes'
import rdfEnvironment from '@zazuko/env/web.js'
import ParsingClient from 'sparql-http-client/ParsingClient'
import { dataModelFromSHACL, dataModelToSHACL } from './shacl'
import * as ns from './namespace'
import { prefixes as _prefixes } from './namespace'
import { Settings, TPrefix } from './model/settings.model'
import { DataModel, Table } from './model/data-model.model'
import { QueryOptions } from 'sparql-http-client'

const SCHEMA_URI = '.well-known/void'

const initialPrefixes = [...Object.keys(_prefixes)]
const displayLanguage = ['en', '*']

export interface FetchDataOptions {
  offset?: number,
  limit?: number
}

/**
 * SPARQL Endpoint class. This is a singleton. Only one  instance exist for this class.
 */
export class Endpoint {
  /**
   * Get the instance of this class.
   * @param settings configuration for the endpoint
   * @returns The Endpoint instance (singleton)
   */
  static getInstance(settings?: Settings): Endpoint | never {
    if (this._endpointInstance === null && settings) {
      this._endpointInstance = new Endpoint(settings)
      return this._endpointInstance
    } else if (settings && this._endpointInstance) {
      this._endpointInstance.applySettings(settings)
    }
    if (this._endpointInstance === null) {
      throw new Error('Endpoint Not Configured')
    }
    return this._endpointInstance
  }

  // eslint-disable-next-line no-use-before-define
  private static _endpointInstance: Endpoint | null = null

  private _client: ParsingClient

  private constructor(private _settings: Settings) {
    this.applySettings(_settings)
  }

  /**
  * Use new setting for SPARQL endpoint
  * @param _settings new Settings for SPARQL Endpoint
  */
  public applySettings(settings: Settings) {
    this._settings = settings
    if (this._settings.sparqlEndpoint) {
      this._client = new ParsingClient(
        {
          endpointUrl: this._settings.sparqlEndpoint,
          user: this._settings.username ?? undefined,
          password: this._settings.password ?? undefined
        }
      )
    }

    // Reinitialize prefixes
    Object.keys(_prefixes).forEach((prefix) => {
      if (!initialPrefixes.includes(prefix)) {
        delete _prefixes[prefix]
      }
    })

    // Apply custom prefixes
    this._settings.prefixes.forEach(({ prefix, namespace }) => {
      _prefixes[prefix] = namespace
    })
  }

  shrink(uri: string): string {
    return shrink(uri) || uri
  }

  /**
   * Fetch a list of graphs in the endpoint
   */
  async fetchGraphs(opts?: FetchDataOptions) {
    const offset = opts?.offset ?? 0
    const limit = opts?.limit ?? null

    const query = `
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

      SELECT DISTINCT ?g
      WHERE {
        GRAPH ?g { ?s ?p ?o }
      }
      ORDER BY ?g
      OFFSET ${offset}
      LIMIT ${limit}
    `
    const graphs = await this._client.query.select(query)
    return graphs.map(({ g: { value } }) => value)
  }

  /**
   * Fetch data model, either by introspecting it or by querying the
   * pre-defined SHACL definition
   */
  async fetchDataModel() {
    if (this._settings.forceIntrospection) {
      return this.fetchIntrospectDataModel()
    }

    const dataModel = await this.fetchPredefinedDataModel()

    if (dataModel !== null) {
      return dataModel
    }

    return this.fetchIntrospectDataModel()
  }

  get datasetURI(): string {
    return this._settings.sparqlEndpoint?.replace(/query\/?$/, SCHEMA_URI) ?? ''
  }

  get sparqlEndpoint(): string {
    return this._settings.sparqlEndpoint ?? ''
  }

  get prefixes(): TPrefix[] {
    return this._settings.prefixes
  }

  /**
   * Fetch data model from pre-defined SHACL definition
   */
  async fetchPredefinedDataModel(): Promise<DataModel | null> {
    const fromClause = this._settings.namedGraph ? `FROM <${this._settings.namedGraph}>` : ''
    const query = `
      #pragma describe.strategy cbd
      DESCRIBE <${this.datasetURI}>
      ${fromClause}
    `
    const queryOptions: QueryOptions = {
      headers: {
        Accept: 'text/turtle, application/n-triples',
      },

    }
    const dataset = await this._client.query.construct(query, queryOptions)

    if (dataset.size === 0) {
      return null
    }
    const ptr = rdfEnvironment.clownface({
      dataset,
      term: rdfEnvironment.namedNode(this.datasetURI),
    })

    return this.dataModelFromSHACL(ptr)
  }

  dataModelFromSHACL(dataset) {
    return dataModelFromSHACL(dataset, displayLanguage, this.shrink)
  }

  dataModelToSHACL(datamodel) {
    return dataModelToSHACL(datamodel, this.datasetURI)
  }

  /**
   * Fetch data model by introspecting the endpoint
   */
  async fetchIntrospectDataModel() {
    const structure = await this._fetchStructure()
    const tablesMap = structure.reduce((tables: Map<string, any>, { cls, property, linktype, datatype }) => {
      const table = tables.get(cls.value) ??
      {
        id: cls.value,
        name: this.shrink(cls.value),
        properties: new Map<string, any>(),
        isShown: cls.value !== 'http://www.w3.org/2000/01/rdf-schema#Class'
      }

      const typeURI = (linktype && linktype.value) || (datatype && datatype.value) || null
      const typeTermType = linktype ? 'NamedNode' : (datatype ? 'Literal' : null)
      const type = typeURI && {
        id: typeURI,
        name: this.shrink(typeURI),
        termType: typeTermType
      }

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
    }, new Map<string, Table>())

    const tables = [...tablesMap.values()].map((table) => ({ ...table, properties: [...table.properties.values()] }))

    const classCountMap = await this.countClasses()
    tables.forEach(table => {
      table.count = classCountMap.get(table.id)
    })
    return {
      tables,
      viewports: [],
      isIntrospected: true,
    }
  }

  async _fetchStructure() {
    const fromClause = this._settings.namedGraph ? `FROM <${this._settings.namedGraph}>` : ''
    const query = `
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

      SELECT DISTINCT ?cls ?property ?linktype ?datatype
      ${fromClause}
      WHERE {
        ?subject a ?cls .
        ?subject ?property ?object .

        FILTER(?property != rdf:type)
        OPTIONAL {
          ?object a ?linktype .
        }

        BIND(DATATYPE(?object) AS ?datatype)
      }
    `
    return this._client.query.select(query)
  }

  /**
   * Fetch a sample of the data of a given table
   */
  async fetchTableData(table, opts?: FetchDataOptions) {
    const type = rdfEnvironment.namedNode(table.id)
    const limit = opts?.limit ?? 10
    const offset = opts?.offset ?? 0
    const graphClause = this._settings.namedGraph ? `GRAPH <${this._settings.namedGraph}>` : ''
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
          OFFSET ${offset}
        }
      }
    `
    const queryOptions: QueryOptions = {
      headers: {
        Accept: 'text/turtle, application/n-triples',
      },

    }

    const dataset = await this._client.query.construct(query, queryOptions)
    const subjects = [...(dataset.match(null, ns.rdf.type, type) as any)]
    const rows = rdfEnvironment.termMap(subjects.map(({ subject }) => [subject, { id: subject.value, term: subject }]))

      ;[...dataset].forEach(({ subject, predicate: { value: predicate }, object }) => {
        const row = rows.get(subject)

        if (!row) return

        if (!row[predicate]) {
          row[predicate] = rdfEnvironment.termSet()
        }

        row[predicate].add(object)

        rows.set(subject, row)
      })

    return [...rows.values()]
  }

  /**
   * Fetch triples related to a given resource.
   */
  async fetchResource(uri: string) {
    const query = `
      DESCRIBE <${uri}> {}
    `

    const queryOptions: QueryOptions = {
      headers: {
        Accept: 'text/turtle, application/n-triples',
      },

    }
    const quads = await this._client.query.construct(query, queryOptions)

    const properties = [...quads].reduce((acc, { predicate, object }) => {
      if (!acc.has(predicate.value)) {
        const property = {
          id: predicate.value,
          term: predicate,
          name: this.shrink(predicate.value),
          values: rdfEnvironment.termSet(),
        }
        acc.set(predicate.value, property)
      }

      acc.get(predicate.value).values.add(object)

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

  /**
   * You can use this function to the the connection.
   *
   * @returns Promise<boolean> true if the SPARQL endpoint returns a triple
   */
  async canFetchOne(): Promise<boolean> {
    const query = `
      SELECT ?s WHERE {
        ?s ?p ?o
      } LIMIT 1
    `
    try {
      const result = await this._client.query.select(query)
      return result.length === 1
    } catch (e) {
      return false
    }
  }

  async countClasses(): Promise<Map<string, number>> {
    const classCountMap = new Map<string, number>()
    const query = classCountQuery(this._settings.namedGraph)
    const result = await this._client.query.select(query)
    result.forEach(row => {
      classCountMap.set(row.class.value, Number(row.count.value))
    })
    return classCountMap
  }
}

function classCountQuery(namedGraph: string | null): string {
  const fromClause = namedGraph ? `FROM <${namedGraph}>` : ''

  return `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?class (count(?x) as ?count) ${fromClause} WHERE {
  ?x a ?class .
} group by ?class
`
}
