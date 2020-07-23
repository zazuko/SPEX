
export function tablesToSHACL (tables) {
  const context = { sh: 'http://www.w3.org/ns/shacl#' }

  let id = 1
  const nextId = () => `_:b${id++}`

  return tables.map((table) => {
    return {
      '@context': context,
      '@id': nextId(),
      '@type': 'sh:NodeShape',
      'sh:targetClass': table.id,
      'sh:property': table.columns.map((column) => {
        const typeProp = (type) => type.termType === 'NamedNode'
          ? { 'sh:class': type.id }
          : { 'sh:datatype': type.id }

        let type = {}
        if (column.types.length === 1) {
          type = typeProp(column.types[0])
        } else if (column.types.length > 1) {
          type['sh:or'] = column.types.map(typeProp)
        }

        return {
          '@id': nextId(),
          '@type': 'sh:PropertyShape',
          'sh:path': column.id,
          ...type,
        }
      }),
    }
  })
}
