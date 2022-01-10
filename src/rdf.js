import Environment from '@rdfjs/environment'
import DataFactory from '@rdfjs/environment/DataFactory.js'
import DatasetFactory from '@rdfjs/environment/DatasetFactory.js'
import NamespaceFactory from '@rdfjs/environment/NamespaceFactory.js'
import TermMapSetFactory from '@rdfjs/environment/TermMapSetFactory.js'

const factory = new Environment([DataFactory, DatasetFactory, NamespaceFactory, TermMapSetFactory])

export default factory
