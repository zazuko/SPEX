import prefixes from '@zazuko/rdf-vocabularies/prefixes'
import rdfEnvironment from 'rdf-ext'

prefixes.spex = 'https://described.at/spex/'

export const rdf = rdfEnvironment.namespace(prefixes.rdf)
export const schema = rdfEnvironment.namespace(prefixes.schema)
export const sh = rdfEnvironment.namespace(prefixes.sh)
export const spex = rdfEnvironment.namespace(prefixes.spex)

export {
  prefixes
}
