<template>
  <div class="modal-card w-auto">
    <div class="modal-card-head flex justify-between py-4">
      <h3>Generated SHACL shapes</h3>
      <button class="button" title="Load SHACL shapes" @click="load">
        <UploadIcon class="icon" />
      </button>
    </div>
    <div class="modal-card-body overflow-y-hidden flex flex-col pb-0">
      <div class="flex justify-between">
        <div class="field has-addons">
          <b-radio-button
            v-for="format in formats"
            :key="format.value"
            :native-value="format.value"
            v-model="selectedFormat"
          >
            {{ format.label }}
          </b-radio-button>
        </div>
        <button class="button" @click="copy">
          <ClipboardCopyIcon class="icon" />
          <span>Copy</span>
        </button>
      </div>
      <rdf-editor
        :value="shaclStr"
        :format="selectedFormat"
        :prefixes.prop="prefixes"
        :customPrefixes.prop="customPrefixes"
        ref="snippet"
        readonly
        class="overflow-y-auto"
      />
    </div>
  </div>
</template>

<script>
import '@rdfjs-elements/rdf-editor'
import { ToastProgrammatic as Toast } from 'buefy'
import ClipboardCopyIcon from './icons/ClipboardCopyIcon.vue'
import UploadIcon from './icons/UploadIcon.vue'

export default {
  name: 'ModalShacl',
  components: { ClipboardCopyIcon, UploadIcon },
  props: ['shacl', 'loadShacl', 'endpoint'],

  data () {
    const customPrefixes = this.endpoint.prefixes.reduce((acc, { prefix, url }) =>
      ({ ...acc, [prefix]: url }), {})

    return {
      shaclStr: JSON.stringify(this.shacl, null, 2),
      formats: [
        { label: 'JSON-LD', value: 'application/ld+json' },
        { label: 'Turtle', value: 'text/turtle' },
        { label: 'N-Triples', value: 'application/n-triples' },
      ],
      selectedFormat: 'application/ld+json',
      prefixes: ['sh', 'schema'].join(','),
      customPrefixes,
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
rdf-editor::part(CodeMirror-sizer) {
  margin-bottom: 0 !important;
  min-height: 0 !important;
  border-right-width: 0 !important;
}

rdf-editor::part(CodeMirror-scroll) {
  margin-bottom: 0;
  padding-bottom: 0;
}

rdf-editor::part(CodeMirror-lines) {
  padding-bottom: 0;
}

rdf-editor::part(CodeMirror-vscrollbar) {
  display: none;
}

rdf-editor::part(CodeMirror-hscrollbar) {
  display: none;
}
</style>
