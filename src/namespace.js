import namespace from '@rdfjs/namespace'
import prefixes from '@zazuko/rdf-vocabularies/prefixes'

prefixes.spex = 'https://ld.zazuko.com/spex/'

export const rdf = namespace(prefixes.rdf)
export const schema = namespace(prefixes.schema)
export const sh = namespace(prefixes.sh)
export const spex = namespace(prefixes.spex)

export {
  prefixes
}
