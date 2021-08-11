import clownface from 'clownface'
import RDF from '@rdfjs/dataset'
import { rdf, schema, sh, spex } from './namespace'

/**
 * Extracts a SPEX datamodel from a given dataset SHACL description.
 *
 * @param {Clownface} dataset - Pointer to the dataset description
 * @returns {Object} SPEX datamodel
 */
export function datamodelFromSHACL (dataset, language, shrink) {
  const defaultShapes = dataset.out(spex.shape).has(rdf.type, spex.DefaultShapes)
  const tables = defaultShapes.term
    ? tablesFromSHACL(defaultShapes.out(schema.hasPart), shrink)
    : null

  const viewports = dataset.out(spex.viewport).map(viewport => ({
    id: viewport.term.value,
    term: viewport.term,
    name: viewport.out(schema.name, { language }).value,
    tables: new Set(viewport.out(spex.includes).terms.map(({ value }) => value)),
  }))

  return {
    tables,
    viewports,
    isIntrospected: false,
  }
}

export function tablesFromSHACL (shapes, shrink) {
  return shapes
    .toArray()
    .map((shape) => {
      const targetClass = shape.out(sh.targetClass).term

      if (!targetClass) return null

      const id = targetClass.value
      const properties = shape
        .out(sh.property)
        .map((property) => {
          const path = property.out(sh.path).term

          if (!path) return null

          const id = path.value
          const values = propertyTypes(property, shrink)

          return {
            id,
            name: shrink(id),
            values,
          }
        })
        .filter(Boolean)

      return {
        id,
        name: shrink(id),
        properties,
        isShown: true,
      }
    })
    .filter(Boolean)
}

function propertyTypes (property, shrink) {
  return [
    ...property.out(sh.datatype).terms.map((datatype) => typeFromTerm(datatype, 'Literal', shrink)),
    ...property.out(sh.class).terms.map((cls) => typeFromTerm(cls, 'NamedNode', shrink)),
    ...[...property.out(sh.or).list()].flatMap((conditionalProp) => propertyTypes(conditionalProp, shrink)),
  ]
}

function typeFromTerm (term, termType, shrink) {
  return {
    id: term.value,
    name: shrink(term.value),
    termType,
  }
}

/**
 * Serializes the datamodel as a SHACL description.
 *
 * @param {Object} datamodel - SPEX datamodel
 * @param {string} datasetURI - URI of the dataset (.well-known/void)
 * @returns {Clownface} - Pointer to the dataset description
 */
export function datamodelToSHACL (datamodel, datasetURI) {
  const dataset = clownface({
    dataset: RDF.dataset(),
    term: RDF.namedNode(datasetURI)
  })

  dataset.addOut(spex.shape, defaultShapes => {
    defaultShapes.addOut(rdf.type, spex.DefaultShapes)

    datamodel.tables.forEach(table => {
      defaultShapes.addOut(schema.hasPart, shape => {
        shape
          .addOut(rdf.type, sh.NodeShape)
          .addOut(sh.targetClass, RDF.namedNode(table.id))

        table.properties.forEach(property => {
          shape.addOut(sh.property, propertyShape => {
            propertyShape
              .addOut(rdf.type, sh.PropertyShape)
              .addOut(sh.path, RDF.namedNode(property.id))

            const typeProp = (type) => type.termType === 'NamedNode'
              ? [sh.class, RDF.namedNode(type.id)]
              : [sh.datatype, RDF.namedNode(type.id)]

            if (property.values.length === 1) {
              propertyShape.addOut(...typeProp(property.values[0]))
            } else if (property.values.length > 1) {
              propertyShape.addList(sh.or, property.values.map(value =>
                propertyShape.blankNode().addOut(...typeProp(value))))
            }
          })
        })
      })
    })
  })

  return dataset
}
