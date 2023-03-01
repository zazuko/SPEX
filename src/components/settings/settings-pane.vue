<template>
  <div class="card is-shadowless h-full overflow-y-auto">
    <div class="card-header has-background-light">
      <h3 class="card-header-title">Options</h3>
      <p class="card-header-icon py-0 px-1">
        <button type="button" class="button is-light" @click="onClose" title="Close">
          <XIcon class="icon" />
        </button>
      </p>
    </div>
    <form class="card-content" @submit.prevent="onSubmit">
      <div class="field">
        <label class="label" for="endpoint">Endpoint URL</label>
        <input id="endpoint" type="text" class="input" v-model="sparqlEndpoint" @blur="updateEndpoint" />
      </div>
      <div class="field">
        <label class="label" for="username">Username</label>
        <input id="username" type="text" class="input" v-model="username" @blur="fetchGraphs" />
      </div>
      <div class="field">
        <label class="label" for="password">Password</label>
        <input id="password" type="password" class="input" v-model="password" @blur="fetchGraphs" />
      </div>
      <div class="field" :class="fetchError ? 'is-danger' : ''">
        <label class="label" for="graph">Graph</label>
        <SelectGraph id="graph" v-model="namedGraph" :graphs="graphs" :loading="loadingGraphs"
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
          <div v-for="(prefix, index) in prefixes" :key="index" class="flex gap-1">
            <input type="text" v-model="prefix.prefix" placeholder="schema" class="input w-24" required />
            <input type="text" v-model="prefix.namespace" placeholder="http://schema.org/" class="input flex-grow"
              required />
            <button type="button" class="button is-white" title="Remove prefix" @click="removePrefix(index)">
              <MinusSmIcon class="icon" />
            </button>
          </div>
          <p v-if="prefixes.length === 0" class="has-text-grey">
            No custom prefix
          </p>
          <p>
            <button type="button" class="button is-white" title="Add prefix" @click="addPrefix">
              <PlusSmIcon class="icon" />
            </button>
          </p>
        </div>
      </div>
      <div class="field">
        <label class="label flex items-center gap-2">
          <SpexSwitch v-model="forceIntrospection" />
          Force introspection
        </label>
        <p class="help">
          By default, the explorer will use the endpoint schema provided at <code>endpoint/.well-known/void</code>
          (if any). Use this option to force an introspection.
        </p>
      </div>
      <div class="field">
        <button class="button is-primary" type="submit">Load</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { MinusSmIcon, PlusSmIcon, XIcon } from '@heroicons/vue/solid'
import { Endpoint } from '@/endpoint'
import { Settings, TPrefix, TLegacySettings } from '@/model/settings.model'
import SelectGraph from './select-graph.vue'
import SpexSwitch from '../common/switch.vue'
import { ref, watch, onMounted } from 'vue'

const graphsPageSize = 10

interface Props {
  settings: Settings
}
const props = defineProps<Props>()

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const emit = defineEmits<{
  (event: 'settingsChanged', value: Settings): void;
  (event: 'close'): void
}>()

const sparqlEndpoint = ref<string>(props.settings.sparqlEndpoint ?? '')
const username = ref<string>(props.settings.username ?? '')
const password = ref<string>(props.settings.password ?? '')
const namedGraph = ref<string>(props.settings.namedGraph ?? '')
const forceIntrospection = ref<boolean>(props.settings.forceIntrospection)
const prefixes = ref<TPrefix[]>(props.settings.prefixes)

const endpoint: Endpoint | null = null
let graphs = []
let hasMoreGraphs = false
let loadingGraphs = false
let fetchError: string | null = null
let graphsOffset = 0

onMounted(async () => {
  console.log('mounted call', props.settings)
  // await fetchGraphs()
})

function onSubmit(): void {
  const newSettings: Settings = {
    sparqlEndpoint: sparqlEndpoint.value,
    username: username.value,
    password: password.value,
    forceIntrospection: forceIntrospection.value,
    namedGraph: namedGraph.value,
    prefixes: []
  }
  emit('settingsChanged', newSettings)
}

function onClose(): void {
  emit('close')
}

function updateEndpoint(payload: FocusEvent) {
  console.log('eps', sparqlEndpoint.value)
}
async function fetchGraphs() {
  loadingGraphs = true
  // endpoint = new Endpoint(newSettings as LegacySettings)
  graphsOffset = 0
  // graphs = await fetchGraphPage()
}

async function fetchMoreGraphs() {
  const newGraphs = await fetchGraphPage()
  graphs = graphs.concat(newGraphs)
}

async function fetchGraphPage() {
  loadingGraphs = true
  fetchError = ''

  try {
    const page = { offset: graphsOffset, limit: graphsPageSize }
    const graphs = await endpoint?.fetchGraphs(page)
    graphsOffset = graphsOffset + graphsPageSize
    hasMoreGraphs = graphs.length >= graphsPageSize
    return graphs
  } catch (e) {
    fetchError = (e as any).toString()
    return []
  } finally {
    loadingGraphs = false
  }
}

function addPrefix(): void {
  prefixes.value.push({ prefix: '', namespace: '' })
}

function removePrefix(index: number): void {
  prefixes.value.splice(index, 1)
}

watch(sparqlEndpoint, (newEndpoint, oldEndpoint) => {
  console.log('watch', newEndpoint, oldEndpoint)
})
 /**
watch: {
settings(settings) {
this.data = cloneDeep(settings)
},

'data.url'() {
this.endpoint = new Endpoint(this.data)
this.graphs = []
this.data.graph = null
},
},
*/
</script>

<script lang="ts">

export default {
  name: 'SettingsPane'
}
</script>
