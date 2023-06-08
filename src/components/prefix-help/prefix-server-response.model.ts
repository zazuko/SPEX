interface Value {
    value: string
}

interface Term {
    object: string,
    predicate: string,
    value: string,
    datatype?: Value
    language?: string
}

export interface PrefixServerResponse {
    itemText: string;
    parts: Term[],
    prefixedSplitA: string
    prefixedSplitB: string
    ontologyTitle: string
    label: string
}

interface IPrefixZazukoItem {
    readonly avatar: string,
    readonly itemText: string,
    readonly ontologyTitle: string,
    readonly label: string,
    readonly comment: string,
    readonly splitA: string,
    readonly splitB: string,
    readonly parts: Term[]
}

export interface PrefixZazukoDetailItem extends IPrefixZazukoItem {
    readonly type: string
}

export class PrefixZazukoItem implements PrefixZazukoDetailItem {
    private _type: string
    private _comment: string
    private _serverResponseItem: PrefixServerResponse

    constructor(item: PrefixServerResponse) {
        this._serverResponseItem = item
        this._type = item.parts.filter(p => p.predicate === 'rdf:type')[0]?.object ?? ''
        const tempComment = item.parts.filter(p => p.predicate === 'rdfs:comment')
        if (tempComment.length < 2) {
            this._comment = valueToString(tempComment[0]?.object ?? 'no comment')
        } else {
            const enComment = tempComment.filter(com => (com.object as any).language === 'en')
            if (enComment.length === 1) {
                this._comment = valueToString(enComment[0]?.object ?? 'no comment')
            } else {
                this._comment = 'no comment'
            }
        }
    }

    public get type(): string {
        return this._type
    }

    public get avatar(): string {
        const typeS = this.type.split(':')
        if (typeS.length < 2) {
            return 'NT'
        }
        return (typeS[0].charAt(0) + typeS[1].charAt(0)).toUpperCase()
    }

    public get itemText(): string {
        return this._serverResponseItem.itemText
    }

    public get ontologyTitle(): string {
        return this._serverResponseItem.ontologyTitle
    }

    public get label(): string {
        return this._serverResponseItem.label
    }

    public get splitA(): string {
        return this._serverResponseItem.prefixedSplitA
    }

    public get splitB(): string {
        return this._serverResponseItem.prefixedSplitB
    }

    public get comment(): string {
        return this._comment
    }

    public get parts(): Term[] {
        return this._serverResponseItem.parts
    }
}

export function valueToString(value: Term | string): string {
    if (typeof (value) === 'string') {
        return value
    }
    if (value.datatype && value.datatype.value === 'http://www.w3.org/2001/XMLSchema#string') {
        return value.value
    }
    if (value.datatype && value.datatype.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#langString') {
        return value.value
    }
    return ''
}
/**
 *  "graph": {
        "value": "http://schema.org/"
    }
    "predicate": "rdfs:label",
    "predicateIRI": "http://www.w3.org/2000/01/rdf-schema#label",
    "object": {
        "value": "schemaVersion",
        "datatype": {
            "value": "http://www.w3.org/2001/XMLSchema#string"
        },
        "language": ""
    },
    "quad": {
        "subject": {
            "value": "http://schema.org/schemaVersion"
        },
        "predicate": {
            "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "object": {
            "value": "schemaVersion",
        "datatype": {
            "value": "http://www.w3.org/2001/XMLSchema#string"
        },
        "language": ""
    }
    }

graph: {value: "http://www.w3.org/ns/shacl#"}
iri: {value: "http://www.w3.org/ns/shacl#"}
iriSplitA: "http://www.w3.org/ns/shacl#"
iriSplitB: ""
itemText: "sh: (W3C Shapes Constraint Language (SHACL) Vocabulary)"
label: "W3C Shapes Constraint Language (SHACL) Vocabulary"
ontologyTitle: "W3C Shapes Constraint Language (SHACL) Vocabulary"
parts: [
 {
    predicate: "rdf:type",
    predicateIRI: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",…}
    object: "owl:Ontology"
    objectIRI: "http://www.w3.org/2002/07/owl#Ontology"
    predicate: "rdf:type"
predicateIRI: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
quad: {subject: {value: "http://www.w3.org/ns/shacl#"},…}
graph: {value: "http://www.w3.org/ns/shacl#"}
object: {value: "http://www.w3.org/2002/07/owl#Ontology"}
predicate: {value: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}
subject: {
    value: "http://www.w3.org/ns/shacl#"
}
prefixed: "sh:"
prefixedSplitA: "sh"
prefixedSplitB
: ""
 */
