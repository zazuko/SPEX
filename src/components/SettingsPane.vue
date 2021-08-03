<template>
  <div class="card is-shadowless overflow-y-auto">
    <div class="card-header has-background-light">
      <h3 class="card-header-title">Options</h3>
      <p class="card-header-icon py-0 px-1">
        <button class="button is-light" @click="onClose" title="Close">
          <XIcon class="icon" />
        </button>
      </p>
    </div>
    <form class="card-content" @submit.prevent="onSubmit">
      <div class="field">
        <label class="label" for="endpoint">Endpoint URL</label>
        <input id="endpoint" type="text" class="input" v-model="data.url" @blur="fetchGraphs" />
      </div>
      <div class="field">
        <label class="label" for="username">Username</label>
        <input id="username" type="text" class="input" v-model="data.user" @blur="fetchGraphs" />
      </div>
      <div class="field">
        <label class="label" for="password">Password</label>
        <input id="password" type="password" class="input" v-model="data.password" @blur="fetchGraphs" />
      </div>
      <div class="field" :class="fetchError ? 'is-danger' : ''">
        <label class="label" for="graph">Graph</label>
        <b-autocomplete
          id="graph"
          :data="graphs"
          :loading="loadingGraphs"
          placeholder="DEFAULT"
          v-model="data.graph"
          @infinite-scroll="fetchMoreGraphs"
          icon-right="angle-down"
          expanded
          check-infinite-scroll
          open-on-focus
          clearable
        ></b-autocomplete>
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
          <div v-for="(prefix, index) in data.prefixes" :key="index" class="flex gap-1">
            <input type="text" v-model="prefix.prefix" placeholder="schema" class="input w-24" required />
            <input type="text" v-model="prefix.url" placeholder="http://schema.org/" class="input flex-grow" required />
            <button class="button is-white" title="Remove prefix" @click="removePrefix(index)">
              <MinusSmIcon class="icon" />
            </button>
          </div>
          <p v-if="data.prefixes.length === 0" class="has-text-grey">
            No custom prefix
          </p>
          <p>
            <button class="button is-white" title="Add prefix" @click="addPrefix">
              <PlusSmIcon class="icon" />
            </button>
          </p>
        </div>
      </div>
      <div class="field">
        <b-switch v-model="data.forceIntrospection">
          Force introspection
        </b-switch>
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

<script>
import { Endpoint } from '@/endpoint'
import cloneDeep from 'lodash.clonedeep'
import MinusSmIcon from './icons/MinusSmIcon.vue'
import PlusSmIcon from './icons/PlusSmIcon.vue'
import XIcon from './icons/XIcon.vue'

const graphsPageSize = 10

export default {
  name: 'SettingsPane',
  props: ['settings'],
  components: { MinusSmIcon, PlusSmIcon, XIcon },

  data () {
    return {
      endpoint: null,
      graphs: [],
      loadingGraphs: false,
      fetchError: null,
      graphsOffset: 0,
      data: cloneDeep(this.settings),
    }
  },

  async mounted () {
    await this.fetchGraphs()
  },

  methods: {
    onSubmit () {
      this.$emit('change', this.data)
    },

    onClose () {
      this.$emit('close')
    },

    async fetchGraphs () {
      this.loadingGraphs = true
      this.endpoint = new Endpoint(this.data)
      this.graphsOffset = 0
      this.graphs = await this.fetchGraphPage()
    },

    async fetchMoreGraphs () {
      const newGraphs = await this.fetchGraphPage()
      this.graphs = this.graphs.concat(newGraphs)
    },

    async fetchGraphPage () {
      this.loadingGraphs = true
      this.fetchError = ''

      try {
        const page = { offset: this.graphsOffset, limit: graphsPageSize }
        this.graphsOffset = this.graphsOffset + graphsPageSize
        return await this.endpoint.fetchGraphs(page)
      } catch (e) {
        this.fetchError = e.toString()
        return []
      } finally {
        this.loadingGraphs = false
      }
    },

    addPrefix () {
      this.data.prefixes.push({ prefix: '', url: '' })
    },

    removePrefix (index) {
      this.data.prefixes.splice(index, 1)
    },
  },

  watch: {
    settings (settings) {
      this.data = cloneDeep(settings)
    },

    'data.url' () {
      this.endpoint = new Endpoint(this.data)
      this.graphs = []
      this.data.graph = null
    },
  },
}
</script>
