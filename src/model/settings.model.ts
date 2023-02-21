
export interface Settings {
    url: string,
    user: string | null,
    password: string | null,
    graph: string | null,
    prefixes: string[],
    forceIntrospection: boolean
}
