import { shrink } from '@zazuko/rdf-vocabularies/shrink'
import RDF from 'rdf-ext'
import ParsingClient from 'sparql-http-client/ParsingClient'
import { dataModelFromSHACL, dataModelToSHACL } from '@/shacl'
import * as ns from './namespace'
import { prefixes as _prefixes } from './namespace'
import { Settings, TPrefix } from './model/settings.model'

const SCHEMA_URI = '.well-known/void'

const initialPrefixes = [...Object.keys(_prefixes)]
const displayLanguage = ['en', '*']

export interface FetchDataOptions {
  offset?: number,
  limit?: number
}

export class Endpoint {
  private _settings: Settings
  private _client: any

  constructor(settings: Settings) {
    this._settings = settings
    this._client = new ParsingClient(
      {
        endpointUrl: this._settings.sparqlEndpoint,
        user: this._settings.username,
        password: this._settings.password
      }
    )

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

    return dataModel.tables
      ? dataModel
      : this.fetchIntrospectDataModel()
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
  async fetchPredefinedDataModel() {
    const fromClause = this._settings.namedGraph ? `FROM <${this._settings.namedGraph}>` : ''
    const query = `
      #pragma describe.strategy cbd
      DESCRIBE <${this.datasetURI}>
      ${fromClause}
    `
    const quads = await this._client.query.construct(query)
    const dataset = (RDF as any).clownface({
      dataset: RDF.dataset(quads),
      term: RDF.namedNode(this.datasetURI),
    })

    return this.dataModelFromSHACL(dataset)
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

  async _fetchStructure() {
    const fromClause = this._settings.namedGraph ? `FROM <${this._settings.namedGraph}>` : ''
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
    return this._client.query.select(query)
  }

  /**
   * Fetch a sample of the data of a given table
   */
  async fetchTableData(table, opts?: FetchDataOptions) {
    const type = RDF.namedNode(table.id)
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
    const results = await this._client.query.construct(query)
    const dataset = RDF.dataset(results)
    const subjects = [...(dataset.match(null, ns.rdf.type, type) as any)]
    const rows = (RDF as any).termMap(subjects.map(({ subject }) => [subject, { id: subject.value, term: subject }]))

    results.forEach(({ subject, predicate: { value: predicate }, object }) => {
      const row = rows.get(subject)

      if (!row) return

      if (!row[predicate]) {
        row[predicate] = (RDF as any).termSet()
      }

      row[predicate].add(object)

      rows.set(subject, row)
    })

    return [...rows.values()]
  }

  /**
   * Fetch triples related to a given resource.
   */
  async fetchResource(uri) {
    const query = `
      DESCRIBE <${uri}> {}
    `
    const quads = await this._client.query.construct(query)

    const properties = quads.reduce((acc, { predicate, object }) => {
      if (!acc.has(predicate.value)) {
        const property = {
          id: predicate.value,
          term: predicate,
          name: this.shrink(predicate.value),
          values: (RDF as any).termSet(),
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

  async canFetchOne() {
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
}
