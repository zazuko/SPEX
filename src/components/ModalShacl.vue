<template>
  <div class="modal-card" style="width: auto;">
    <div class="modal-card-head">
      <p>Generated SHACL shapes</p>
      <div class="modal-card-actions">
        <b-button icon-left="upload" title="Load SHACL shapes" @click="load"></b-button>
      </div>
    </div>
    <div class="modal-card-body">
      <div class="snippet-controls">
        <b-field>
          <b-radio-button
            v-for="format in formats"
            :key="format.value"
            :native-value="format.value"
            v-model="selectedFormat"
          >
            {{ format.label }}
          </b-radio-button>
        </b-field>
        <b-button icon-left="clipboard" @click="copy">Copy</b-button>
      </div>
      <rdf-editor :serialized.prop="shaclStr" :format="selectedFormat" ref="snippet" readonly />
    </div>
  </div>
</template>

<script>
import '@rdfjs-elements/rdf-snippet'
import { serializers } from '@rdf-esm/formats-common'
import { ToastProgrammatic as Toast } from 'buefy'

serializers.set('application/ld+json', async () => {
  const JsonLdExt = (await import('@rdfjs/serializer-jsonld-ext')).default

  return new JsonLdExt({
    compact: true,
    encoding: 'string',
    context: {
      sh: 'http://www.w3.org/ns/shacl#'
    }
  })
})

export default {
  name: 'ModalShacl',
  props: ['shacl', 'loadShacl'],

  data () {
    return {
      shaclStr: JSON.stringify(this.shacl, null, 2),
      formats: [
        { label: 'JSON-LD', value: 'application/ld+json' },
        { label: 'Turtle', value: 'text/turtle' },
        { label: 'N-Triples', value: 'application/n-triples' },
      ],
      selectedFormat: 'application/ld+json'
    }
  },

  methods: {
    async copy () {
      const content = this.$refs.snippet.codeMirror.value
      await navigator.clipboard.writeText(content)
      Toast.open('Copied 👍')
    },

    load () {
      this.$parent.close()
      this.loadShacl()
    }
  }
}
</script>

<style scoped>
.modal-card-head {
  display: flex;
  justify-content: space-between;
}

.modal-card-actions > * {
  margin-right: 0.2rem;
}

.snippet-controls {
  display: flex;
  justify-content: space-between;
}

rdf-editor::part(CodeMirror-vscrollbar) {
  display: none;
}
</style>
