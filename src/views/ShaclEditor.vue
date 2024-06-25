<template>
  <Splitpanes class="default-theme">
    <Pane size="40">
      <h2 class="font-bold text-lg px-4 py-2 bg-gray-200">SHACL editor</h2>
      <rdf-editor class="w-full h-full overflow-hidden" :format="format" :value="shacl" ref="shaclEditor" />
      <div class="field">
        <label class="label" for="format">Format</label>
        <div class="select">
          <select id="format" v-model="format">
            <option v-for="format in formats" :key="format" :value="format">
              {{ format }}
            </option>
          </select>
        </div>
      </div>
      <button class="button is-primary" @click="loadShacl">
        <ArrowPathIcon class="icon" />
        <span>Update</span>
      </button>
    </Pane>
    <Pane>
      <Splitpanes horizontal>
        <Pane>
          <div class="flex-grow flex flex-col">
            <h2 class="font-bold text-lg px-4 py-2 bg-gray-200">Representation</h2>

            <GraphLayout :nodes="datamodel.tables" :links="links" :active-links="activeLinks">
              <template v-slot:node="{ node }">
                <ResourceCard :resource="node" :active-links="activeLinks" />
              </template>
            </GraphLayout>

            <div class="section" v-if="error">
              <div class="message is-danger">
                <div class="message-body">
                  Error loading data: {{ error }}
                </div>
              </div>
            </div>
          </div>
        </Pane>
      </Splitpanes>
    </Pane>
  </Splitpanes>
</template>

<script>
import { ArrowPathIcon } from '@heroicons/vue/24/solid'
import { shrink as _shrink } from '@zazuko/prefixes'
import { GraphLayout } from '@zazuko/vue-graph-layout'
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import '@rdfjs-elements/rdf-editor'
import rdfEnvironment from '@zazuko/env/web'
import { tablesFromSHACL } from '../shacl'
import { rdf, sh } from '../namespace'
import ResourceCard from '../components/ResourceCard.vue'

const formats = [...parsers.keys()]

const initialEditorContent = `
@prefix sh: <http://www.w3.org/ns/shacl#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
`

export default {
  components: {
    GraphLayout,
    Splitpanes,
    Pane,
    ArrowPathIcon,
    ResourceCard,
  },

  data() {
    return {
      format: 'text/turtle',
      formats,
      shacl: initialEditorContent,
      datamodel: {
        tables: [],
        viewports: [],
        isIntrospected: false,
      },
      error: null,
      activeLinks: [],
    }
  },

  computed: {
    links() {
      const tables = this.datamodel.tables
      const tableIds = new Set(tables.map(({ id }) => id))
      return tables
        .flatMap(table => table.properties.map((property) => ({ ...property, table })))
        .reduce((acc, property) => {
          property.values.forEach((value) => {
            const source = property.table.id
            const target = value.id
            if (tableIds.has(target)) {
              acc.push({ source, target, sourceProperty: property.id, label: property.name })
            }
          })

          return acc
        }, [])
    },
  },

  methods: {
    async loadShacl() {
      const editor = this.$refs.shaclEditor

      this.error = null
      this.datamodel.tables = []

      const shrink = (uri) => _shrink(uri) || uri

      try {
        const quads = await editor.quads
        const dataset = rdfEnvironment.dataset(quads)
        const shapes = rdfEnvironment.clownface({ dataset }).has(rdf.type, sh.NodeShape)
        this.datamodel.tables = tablesFromSHACL(shapes, shrink)
      } catch (e) {
        this.error = e.toString()
      }
    }
  }
}
</script>
