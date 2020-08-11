<template>
  <div class="Overview">
    <Splitpanes class="default-theme">
      <Pane size="40">
        <h2 class="title is-6">SHACL editor</h2>
        <rdf-editor class="shacl-editor" format="text/turtle" :serialized.prop="shacl" ref="shaclEditor" />
        <b-button type="is-primary" icon-left="sync" @click="loadShacl">Update</b-button>
      </Pane>
      <Pane>
        <Splitpanes horizontal>
          <Pane>
            <div class="OverviewPane">
              <h2 class="title is-6">Representation</h2>

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
  </div>
</template>

<style scoped>
.Overview {
  flex-grow: 1;
  overflow-y: hidden;
}

.OverviewPane {
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: hidden;
}

.splitpanes .splitpanes__pane {
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.title {
  padding-bottom: calc(0.375em - 1px);
  padding-left: 0.75em;
  padding-right: 0.75em;
  padding-top: calc(0.375em - 1px);
}

.shacl-editor {
  width: 100%;
  height: 100%;
}
</style>

<script>
import RDF from 'rdf-ext'
import { shrink } from '@zazuko/rdf-vocabularies'
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import '@rdfjs-elements/rdf-editor/rdf-editor'
import OverviewTables from '@/components/OverviewTables.vue'
import { tablesFromSHACL } from '@/shacl'

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
        this.tables = tablesFromSHACL(dataset, endpoint)
      } catch (e) {
        this.error = e.toString()
      }
    }
  }
}
</script>
