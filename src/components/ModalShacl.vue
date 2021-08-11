<template>
  <Dialog @close="$emit('close')">
    <div class="modal-card-head flex justify-between py-4">
      <h3>Generated SHACL shapes</h3>
      <div>
        <button class="button mr-4" title="Load SHACL shapes" @click="load">
          <UploadIcon class="icon" />
        </button>
        <button class="button is-light" title="Close" @click="$emit('close')">
          <XIcon class="icon" />
        </button>
      </div>
    </div>
    <div class="modal-card-body overflow-y-hidden flex flex-col pb-0">
      <div class="flex justify-between">
        <RadioGroup v-model="selectedFormat" class="field has-addons">
          <RadioGroupOption v-for="format in formats" :key="format.value" v-slot="{ checked }" :value="format.value" class="control">
            <span class="button" :class="checked ? 'is-primary' : ''">
              {{ format.label }}
            </span>
          </RadioGroupOption>
        </RadioGroup>

        <div class="flex items-center gap-2">
          <span v-show="copiedMessage" class="text-green-500">
            {{ copiedMessage }}
          </span>
          <button class="button" @click="copy">
            <ClipboardCopyIcon class="icon" />
            <span>Copy</span>
          </button>
        </div>
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
  </Dialog>
</template>

<script>
import { computed, ref, toRefs } from 'vue'
import '@rdfjs-elements/rdf-editor'
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'
import Dialog from './Dialog.vue'
import ClipboardCopyIcon from './icons/ClipboardCopyIcon.vue'
import UploadIcon from './icons/UploadIcon.vue'
import XIcon from './icons/XIcon.vue'

export default {
  name: 'ModalShacl',
  components: { ClipboardCopyIcon, Dialog, RadioGroup, RadioGroupOption, UploadIcon, XIcon },
  props: ['shacl', 'loadShacl', 'endpoint'],
  emits: ['close', 'open-load-shacl'],

  setup (props) {
    const { shacl, endpoint } = toRefs(props)

    const customPrefixes = computed(() => endpoint.value
      .prefixes.reduce((acc, { prefix, url }) => ({ ...acc, [prefix]: url }), {}))

    const shaclStr = computed(() => JSON.stringify(shacl.value, null, 2))

    const copiedMessage = ref(null)

    return {
      customPrefixes,
      shaclStr,
      copiedMessage,
    }
  },

  data () {
    return {
      formats: [
        { label: 'JSON-LD', value: 'application/ld+json' },
        { label: 'Turtle', value: 'text/turtle' },
        { label: 'N-Triples', value: 'application/n-triples' },
      ],
      selectedFormat: 'application/ld+json',
      prefixes: ['sh', 'schema'].join(','),
    }
  },

  methods: {
    async copy () {
      const content = this.$refs.snippet.codeMirror.value
      await navigator.clipboard.writeText(content)

      this.copiedMessage = 'Copied 👍'
      setTimeout(() => { this.copiedMessage = null }, 3000)
    },

    load () {
      this.$emit('open-load-shacl')
      this.$emit('close')
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
