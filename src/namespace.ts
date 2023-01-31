import prefixes from '@zazuko/rdf-vocabularies/prefixes'
import RDF from 'rdf-ext'

prefixes.spex = 'https://described.at/spex/'

export const rdf = (RDF as any).namespace(prefixes.rdf)
export const schema = (RDF as any).namespace(prefixes.schema)
export const sh = (RDF as any).namespace(prefixes.sh)
export const spex = (RDF as any).namespace(prefixes.spex)

export {
  prefixes
}
