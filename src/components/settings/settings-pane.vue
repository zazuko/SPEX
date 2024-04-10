<template>
  <div class="card is-shadowless h-full overflow-y-auto">
    <div class="card-header has-background-light">
      <h3 class="card-header-title">Options</h3>
      <p class="card-header-icon py-0 px-1">
        <button type="button" class="button is-light" @click="onClose" title="Close">
          <XMarkIcon class="icon" />
        </button>
      </p>
    </div>
    <form class="card-content">
      <div class="field">
        <label class="label" for="endpoint">Sparql Endpoint URL</label>
        <p class="control has-icons-right">
          <input id="endpoint" type="text" class="input" v-model="newAppSettings.sparqlEndpoint" @blur="onSparqlInputBlur"
            @focusin="onSparqlInputFocus" />
          <span class="icon is-small is-right" CheckIcon v-if="!hasSparqlEndpointInputFocus">
            <CheckIcon v-if="isEndpointOk" class="icon" style="color: green" />
            <XMarkIcon v-if="!isEndpointOk" class="icon" style="color: red" />
          </span>
        </p>
      </div>
      <div class="field">
        <label class="label" for="username">Username</label>
        <input id="username" type="text" class="input" v-model="newAppSettings.username"
          @blur="onUsernamePasswordInputBlur" />
      </div>
      <div class="field">
        <label class="label" for="password">Password</label>
        <input id="password" type="password" class="input" v-model="newAppSettings.password"
          @blur="onUsernamePasswordInputBlur" />
      </div>
      <div class="field" :class="fetchError ? 'is-danger' : ''">
        <label class="label" for="graph">Named Graph</label>
        <SelectGraph id="graph" v-model="newAppSettings.namedGraph" :graphs="graphs" :loading="loadingGraphs"
          :has-more-graphs="hasMoreGraphs" @fetch-more="fetchMoreGraphs" />
      </div>
      <div class="field">
        <div class="message is-danger" v-if="fetchError">
          <div class="message-body">
            {{ fetchError }}
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label">Custom prefixes</label>
        <div class="flex flex-col gap-1">
          <div v-for="(prefix, index) in newAppSettings.prefixes" :key="index" class="flex gap-1">
            <input type="text" v-model="prefix.prefix" placeholder="schema" class="input w-24" required />
            <input type="text" v-model="prefix.namespace" placeholder="http://schema.org/" class="input flex-grow"
              required />
            <button type="button" class="button is-white" title="Remove prefix" @click="removePrefix(index)">
              <MinusSmallIcon class="icon" />
            </button>
          </div>
          <p v-if="newAppSettings.prefixes.length === 0" class="has-text-grey">
            No custom prefix
          </p>
          <p>
            <button type="button" class="button is-white" title="Add prefix" @click="addPrefix">
              <PlusSmallIcon class="icon" />
            </button>
          </p>
        </div>
      </div>
      <div class="field">
        <label class="label flex items-center gap-2">
          <SpexSwitch v-model="newAppSettings.forceIntrospection" />
          Force introspection
        </label>
        <p class="help">
          By default, the explorer will use the endpoint schema provided at <code>endpoint/.well-known/void</code>
          (if any). Use this option to force an introspection.
        </p>
      </div>
      <div class="field">
        <button class="button is-primary" type="submit" @click="onSubmit">Load</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { MinusSmallIcon, PlusSmallIcon, XMarkIcon, CheckIcon } from '@heroicons/vue/24/solid'
import { Endpoint } from '../../endpoint'
import { Settings } from '../../model/settings.model'
import SelectGraph from './select-graph.vue'
import SpexSwitch from '../common/switch.vue'
import { ref, onMounted } from 'vue'

const graphsPageSize = 10

interface Props {
  settings: Settings
}
const props = defineProps<Props>()

const newAppSettings = ref<Settings>({
  sparqlEndpoint: props.settings.sparqlEndpoint,
  namedGraph: props.settings.namedGraph,
  prefixes: props.settings.prefixes,
  username: props.settings.username,
  password: props.settings.password,
  forceIntrospection: props.settings.forceIntrospection
})

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const emit = defineEmits<{
  (event: 'settingsChanged', value: Settings): void;
  (event: 'close'): void
}>()

const isEndpointOk = ref<boolean>(false)
const hasSparqlEndpointInputFocus = ref<boolean>(false)

let endpoint: Endpoint | null = null

if (props.settings.sparqlEndpoint) {
  updateEndpoint()
}
const graphs = ref<string[]>([])
const hasMoreGraphs = ref<boolean>(false)
const loadingGraphs = ref<boolean>(false)
const fetchError = ref<string | null>(null)
const graphsOffset = ref<number>(0)

onMounted(async () => {
  if (props.settings.sparqlEndpoint !== null) {
    await fetchGraphs()
  }
})

function onSubmit(e: Event): void {
  e.preventDefault()
  e.stopPropagation()
  emit('settingsChanged', newAppSettings.value)
}

function onClose(): void {
  emit('close')
}
function onSparqlInputBlur(payload: FocusEvent) {
  newAppSettings.value.namedGraph = null
  updateEndpoint()
}

function onUsernamePasswordInputBlur(payload: FocusEvent) {
  if ((newAppSettings.value.username?.length ?? 0) > 0 && (newAppSettings.value.username?.length ?? 0) > 0) {
    updateEndpoint()
  } else if ((newAppSettings.value.username?.length ?? 0) === 0 && (newAppSettings.value.username?.length ?? 0) === 0) {
    updateEndpoint()
  }
}

async function updateEndpoint() {
  const endpoint = Endpoint.getInstance(newAppSettings.value)
  isEndpointOk.value = await endpoint.canFetchOne()
  hasSparqlEndpointInputFocus.value = false
  if (isEndpointOk.value) {
    fetchGraphs()
  }
}

async function fetchGraphs() {
  loadingGraphs.value = true
  endpoint = Endpoint.getInstance(newAppSettings.value)
  graphsOffset.value = 0
  graphs.value = await fetchGraphPage() ?? []
}

async function fetchMoreGraphs() {
  const newGraphs = await fetchGraphPage() ?? []
  graphs.value = graphs.value.concat(newGraphs)
}

async function fetchGraphPage() {
  loadingGraphs.value = true
  fetchError.value = ''

  try {
    const page = { offset: graphsOffset.value, limit: graphsPageSize }
    const graphs = await endpoint?.fetchGraphs(page)
    graphsOffset.value = graphsOffset.value + graphsPageSize
    hasMoreGraphs.value = (graphs?.length ?? 0) >= graphsPageSize
    return graphs
  } catch (e) {
    fetchError.value = (e as any).toString()
    return []
  } finally {
    loadingGraphs.value = false
  }
}

function addPrefix(): void {
  newAppSettings.value.prefixes.push({ prefix: '', namespace: '' })
}

function removePrefix(index: number): void {
  newAppSettings.value.prefixes.splice(index, 1)
}

function onSparqlInputFocus() {
  hasSparqlEndpointInputFocus.value = true
  endpoint = null
}

</script>

<script lang="ts">

export default {
  name: 'SettingsPane'
}
</script>
