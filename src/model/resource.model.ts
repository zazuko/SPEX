import { Term } from 'rdf-js'

export interface Resource {
    id: string,
    name: string,
    term: Term
}
