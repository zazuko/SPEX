import { sh, prefixes } from './namespace'

/**
 * Serializes a list of a tables as a SHACL graph.
 *
 * @param {Array} tables - List of tables
 * @param {Endpoint} endpoint
 * @returns Object - JSON-LD SHACL
 */
export function tablesToSHACL (tables, endpoint) {
  const customPrefixes = endpoint.prefixes.reduce((acc, { prefix, url }) => ({ ...acc, [prefix]: url }), {})
  const context = { ...prefixes, ...customPrefixes }

  const graph = tables.map((table) => {
    return {
      '@type': 'sh:NodeShape',
      'sh:targetClass': { '@id': endpoint.shrink(table.id) },
      'sh:property': table.columns.map((column) => {
        const typeProp = (type) => type.termType === 'NamedNode'
          ? { 'sh:class': { '@id': endpoint.shrink(type.id) } }
          : { 'sh:datatype': { '@id': endpoint.shrink(type.id) } }

        let type = {}
        if (column.types.length === 1) {
          type = typeProp(column.types[0])
        } else if (column.types.length > 1) {
          type['sh:or'] = { '@list': column.types.map(typeProp) }
        }

        return {
          '@type': 'sh:PropertyShape',
          'sh:path': { '@id': endpoint.shrink(column.id) },
          ...type,
        }
      }),
    }
  })

  return {
    '@context': context,
    '@graph': {
      '@type': 'spex:DefaultShapes',
      'schema:hasPart': graph,
    },
  }
}

/**
 * Extracts a list of tables from an RDF graph.
 *
 * @param {Clownface} shapes - Pointer to node shapes
 * @param {Endpoint} endpoint
 * @returns
 */
export function tablesFromSHACL (shapes, endpoint) {
  return shapes
    .toArray()
    .map((shape) => {
      const targetClass = shape.out(sh.targetClass).term

      if (!targetClass) return null

      const id = targetClass.value
      const columns = shape
        .out(sh.property)
        .map((property) => {
          const path = property.out(sh.path).term

          if (!path) return null

          const id = path.value
          const types = propertyTypes(property, endpoint)

          return {
            id,
            name: endpoint.shrink(id),
            types,
          }
        })
        .filter(Boolean)

      return {
        id,
        name: endpoint.shrink(id),
        columns,
        isShown: true,
      }
    })
    .filter(Boolean)
}

function propertyTypes (property, endpoint) {
  return [
    ...property.out(sh.datatype).terms.map((datatype) => typeFromTerm(datatype, 'Literal', endpoint)),
    ...property.out(sh.class).terms.map((cls) => typeFromTerm(cls, 'NamedNode', endpoint)),
    ...[...property.out(sh.or).list()].flatMap((conditionalProp) => propertyTypes(conditionalProp, endpoint)),
  ]
}

function typeFromTerm (term, termType, endpoint) {
  return {
    id: term.value,
    name: endpoint.shrink(term.value),
    termType,
  }
}
