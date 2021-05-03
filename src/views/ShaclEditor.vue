<template>
  <Splitpanes class="default-theme">
    <Pane size="40">
      <h2 class="font-bold text-lg px-4 py-2 bg-gray-200">SHACL editor</h2>
      <rdf-editor class="w-full h-full overflow-hidden" :format="format" :value="shacl" ref="shaclEditor" />
      <b-field label="Format">
        <b-select v-model="format">
          <option v-for="format in formats" :key="format" :value="format">{{ format }}</option>
        </b-select>
      </b-field>
      <b-button type="is-primary" icon-left="sync" @click="loadShacl">Update</b-button>
    </Pane>
    <Pane>
      <Splitpanes horizontal>
        <Pane>
          <div class="flex-grow flex flex-col">
            <h2 class="font-bold text-lg px-4 py-2 bg-gray-200">Representation</h2>

            <OverviewTables :tables="tables" />

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
import RDF from '@rdfjs/dataset'
import { shrink } from '@zazuko/rdf-vocabularies/shrink'
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import '@rdfjs-elements/rdf-editor'
import { parsers } from '@rdf-esm/formats-common'
import clownface from 'clownface'
import OverviewTables from '@/components/OverviewTables.vue'
import { tablesFromSHACL } from '@/shacl'
import { rdf, sh } from '@/namespace'

const formats = [...parsers.keys()]

const initialEditorContent = `
@prefix sh: <http://www.w3.org/ns/shacl#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
`

export default {
  components: {
    OverviewTables,
    Splitpanes,
    Pane
  },

  data () {
    return {
      format: 'text/turtle',
      formats,
      shacl: initialEditorContent,
      tables: [],
      error: null
    }
  },

  methods: {
    async loadShacl () {
      const editor = this.$refs.shaclEditor

      this.error = null
      this.tables = []

      const endpoint = {
        shrink (uri) {
          return shrink(uri) || uri
        }
      }

      try {
        const quads = await editor.quads
        const dataset = RDF.dataset(quads)
        const shapes = clownface({ dataset }).has(rdf.type, sh.NodeShape)
        this.tables = tablesFromSHACL(shapes, endpoint)
      } catch (e) {
        this.error = e.toString()
      }
    }
  }
}
</script>
