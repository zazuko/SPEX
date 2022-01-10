import prefixes from '@zazuko/rdf-vocabularies/prefixes'
import RDF from './rdf'

prefixes.spex = 'https://described.at/spex/'

export const rdf = RDF.namespace(prefixes.rdf)
export const schema = RDF.namespace(prefixes.schema)
export const sh = RDF.namespace(prefixes.sh)
export const spex = RDF.namespace(prefixes.spex)

export {
  prefixes
}
