<template>
  <SpexDialog @close="$emit('close')">
    <div class="modal-card-head py-4">
      <h3 style="color: grey">Generated SHACL shapes</h3>
      <div class="ml-auto">
        <Tooltip label="Load SHACL shapes" position="bottom" class="mr-4">
          <button class="button" @click="load">
            <ArrowUpTrayIcon class="icon" />
          </button>
        </Tooltip>
        <Tooltip label="Close" position="bottom">
          <button class="button is-light" @click="$emit('close')">
            <XMarkIcon class="icon" />
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
            <ClipboardDocumentIcon class="icon" />
            <span>Copy</span>
          </button>
        </div>
      </div>
      <rdf-editor :format="selectedFormat" :quads.prop="shacl" :prefixes.prop="prefixes"
        :customPrefixes.prop="customPrefixes" ref="snippet" class="overflow-y-auto" />
    </div>
  </SpexDialog>
</template>

<script setup lang="ts">
import '@rdfjs-elements/rdf-editor'
import { DataModel } from '../../model/data-model.model'
import { Endpoint } from '../../endpoint'
import { ClipboardDocumentIcon, ArrowUpTrayIcon, XMarkIcon } from '@heroicons/vue/24/solid'
import SpexDialog from './dialog.vue'
import Tooltip from '../common/tooltip.vue'
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'
import { computed, ref } from 'vue'

interface Props {
  datamodel: DataModel,
  loadShacl?: any,
}
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const props = defineProps<Props>()

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const emit = defineEmits<{
  (event: 'close'): void;
  (event: 'open-load-shacl'): void
}>()

const endpoint = Endpoint.getInstance()
const customPrefixes = computed(() => endpoint.prefixes.reduce((acc, { prefix, namespace }) => ({ ...acc, [prefix]: namespace }), {}))
const shacl = computed(() => [...endpoint.dataModelToSHACL(props.datamodel).dataset])
const copiedMessage = ref<string | null>(null)
const snippet = ref<any>(null)

const formats = ref<any[]>([
  { label: 'JSON-LD', value: 'application/ld+json' },
  { label: 'Turtle', value: 'text/turtle' },
  { label: 'N-Triples', value: 'application/n-triples' },
])

const selectedFormat = ref<string>('application/ld+json')
const prefixes = ref<string>(['sh', 'schema'].join(','))

async function copy(): Promise<void> {
  const content = snippet.value.codeMirror.value
  await navigator.clipboard.writeText(content)
  copiedMessage.value = 'Copied 👍'
  setTimeout(() => { copiedMessage.value = null }, 3000)
}

function load(): void {
  emit('open-load-shacl')
  emit('close')
}
</script>

<script lang="ts">

export default {
  name: 'ModalShacl'
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
