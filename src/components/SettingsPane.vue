<template>
  <div class="card is-shadowless overflow-y-auto">
    <div class="card-header has-background-light">
      <h3 class="card-header-title">Options</h3>
      <p class="card-header-icon py-0 px-1">
        <b-button icon-left="times" type="is-light" @click="onClose" class="button is-white" title="Close" />
      </p>
    </div>
    <form class="card-content" @submit.prevent="onSubmit">
      <b-field label="Endpoint URL">
        <b-input v-model="data.url" @blur="fetchGraphs" />
      </b-field>
      <b-field label="Username">
        <b-input v-model="data.user" />
      </b-field>
      <b-field label="Password">
        <b-input type="password" v-model="data.password" password-reveal />
      </b-field>
      <b-field label="Graph" :message="fetchError" :type="fetchError ? 'is-danger' : ''">
        <b-field>
          <b-autocomplete
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
        </b-field>
      </b-field>
      <b-field label="Custom prefixes" :addons="false" class="flex flex-col items-stretch gap-1">
        <div v-for="(prefix, index) in data.prefixes" :key="index" class="flex gap-1">
          <b-input v-model="prefix.prefix" placeholder="schema" class="w-24" required />
          <b-input v-model="prefix.url" placeholder="http://schema.org/" class="flex-grow" required />
          <b-button type="is-white" icon-left="minus" title="Remove prefix" @click="removePrefix(index)" />
        </div>
        <p v-if="data.prefixes.length === 0" class="has-text-grey">No custom prefix</p>
        <p>
          <b-button type="is-white" icon-left="plus" title="Add prefix" @click="addPrefix" />
        </p>
      </b-field>
      <b-field :addons="false">
        <b-switch v-model="data.forceIntrospection">
          Force introspection
        </b-switch>
        <p class="help">
          By default, the explorer will use the endpoint schema provided at <code>endpoint/.well-known/void</code>
          (if any). Use this option to force an introspection.
        </p>
      </b-field>
      <b-field><button class="button is-primary" type="submit">Load</button></b-field>
    </form>
  </div>
</template>

<script>
import { Endpoint } from '@/endpoint'
import cloneDeep from 'lodash.clonedeep'

const graphsPageSize = 10

export default {
  name: 'SettingsPane',
  props: ['settings'],

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
