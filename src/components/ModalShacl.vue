<template>
  <SpexDialog @close="$emit('close')">
    <div class="modal-card-head py-4">
      <h3>Generated SHACL shapes</h3>
      <div class="ml-auto">
        <Tooltip label="Load SHACL shapes" position="bottom" class="mr-4">
          <button class="button" @click="load">
            <UploadIcon class="icon" />
          </button>
        </Tooltip>
        <Tooltip label="Close">
          <button class="button is-light" @click="$emit('close')">
            <XIcon class="icon" />
          </button>
        </Tooltip>
      </div>
    </div>
    <div class="modal-card-body overflow-y-hidden flex flex-col pb-0">
      <div class="flex justify-between">
        <RadioGroup v-model="selectedFormat" class="field has-addons">
          <RadioGroupOption v-for="format in formats" :key="format.value" v-slot="{ checked }" :value="format.value"
            class="control">
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
      <rdf-editor :format="selectedFormat" :quads.prop="shacl" :prefixes.prop="prefixes"
        :customPrefixes.prop="customPrefixes" ref="snippet" class="overflow-y-auto" />
    </div>
  </SpexDialog>
</template>

<script>
import { computed, ref, toRefs } from 'vue'
import '@rdfjs-elements/rdf-editor'
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'
import { ClipboardCopyIcon, UploadIcon, XIcon } from '@heroicons/vue/solid'
import SpexDialog from './Dialog.vue'
import Tooltip from './Tooltip.vue'

export default {
  name: 'ModalShacl',
  components: { ClipboardCopyIcon, SpexDialog, RadioGroup, RadioGroupOption, Tooltip, UploadIcon, XIcon },
  props: ['datamodel', 'loadShacl', 'endpoint'],
  emits: ['close', 'open-load-shacl'],

  setup(props) {
    const { datamodel, endpoint } = toRefs(props)

    const customPrefixes = computed(() => endpoint.value
      .prefixes.reduce((acc, { prefix, url }) => ({ ...acc, [prefix]: url }), {}))

    const shacl = computed(() => [...endpoint.value.dataModelToSHACL(datamodel.value).dataset])

    const copiedMessage = ref(null)

    return {
      customPrefixes,
      shacl,
      copiedMessage,
    }
  },

  data() {
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
    async copy() {
      const content = this.$refs.snippet.codeMirror.value
      await navigator.clipboard.writeText(content)

      this.copiedMessage = 'Copied 👍'
      setTimeout(() => { this.copiedMessage = null }, 3000)
    },

    load() {
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
  border-right-width: 0 !important
}

rdf-editor::part(CodeMirror-scroll) {
  margin-bottom: 0;
  padding-bottom: 0
}

rdf-editor::part(CodeMirror-lines) {
  padding-bottom: 0
}

rdf-editor::part(CodeMirror-vscrollbar) {
  display: none
}

rdf-editor::part(CodeMirror-hscrollbar) {
  display: none
}
</style>
