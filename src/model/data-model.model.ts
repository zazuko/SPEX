export interface PropertyTerm {
    id: string,
    name: string,
    termType: string
}
export interface Property {
    id: string,
    name: string,
    values: PropertyTerm[]
}
export interface Table {
    id: string,
    name: string,
    properties: Property[],
    isShown: boolean
}
export interface DataModel {
    viewports: any[],
    tables: Table[]
    isIntrospected: boolean,
}
