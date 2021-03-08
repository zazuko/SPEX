<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">
        <b-button icon-left="chevron-right" @click="onClose" class="button is-white" title="Close">
          Options
        </b-button>
      </p>
    </div>
    <form class="card-content" @submit.prevent="onSubmit">
      <b-field label="Endpoint URL">
        <b-input v-model="settings.url" />
      </b-field>
      <b-field label="Username">
        <b-input v-model="settings.user" />
      </b-field>
      <b-field label="Password">
        <b-input type="password" v-model="settings.password" password-reveal />
      </b-field>
      <b-field label="Graph" :message="fetchError" :type="fetchError ? 'is-danger' : ''">
        <b-field>
          <b-select v-model="settings.graph" expanded>
            <option :value="null">DEFAULT</option>
            <option v-for="graph in graphs" :key="graph" :value="graph">
              {{ graph }}
            </option>
          </b-select>
          <b-button icon-left="sync" title="Load graphs" @click="fetchGraphs" :loading="loadingGraphs" />
        </b-field>
      </b-field>
      <b-field label="Custom prefixes" :addons="false">
        <div v-for="(prefix, index) in settings.prefixes" :key="index" class="prefix-row">
          <b-input v-model="prefix.prefix" placeholder="schema" class="prefix-prefix" required />
          <b-input v-model="prefix.url" placeholder="http://schema.org/" class="prefix-url" required />
          <b-button type="is-white" icon-left="minus" title="Remove prefix" @click="removePrefix(index)" />
        </div>
        <p v-if="settings.prefixes.length === 0" class="has-text-grey">No custom prefix</p>
        <b-button type="is-white" icon-left="plus" title="Add prefix" @click="addPrefix" />
      </b-field>
      <b-field :addons="false">
        <b-switch v-model="settings.forceIntrospection">
          Force introspection
        </b-switch>
        <p class="help">
          By default, the explorer will use the endpoint schema provided at <code>endpoint/.well-known/schema</code>
          (if any). Use this option to force an introspection.
        </p>
      </b-field>
      <b-field><button class="button is-primary" type="submit">Load</button></b-field>
    </form>
  </div>
</template>

<style scoped>
.card {
  min-height: 100%;
  overflow-y: auto;
}

.prefix-row {
  display: flex;
  flex-direction: row;
}

.prefix-row > * {
  margin-right: 3px;
  margin-bottom: 3px;
}

.prefix-row > *:last-child {
  margin-right: 0;
  margin-bottom: 0;
}

.prefix-row > .prefix-prefix {
  width: 5rem;
}

.prefix-row > .prefix-url {
  flex-grow: 1;
}
</style>

<script>
import { Endpoint } from '@/endpoint'

export default {
  name: 'SettingsPane',
  props: ['settings'],

  data () {
    return {
      graphs: [],
      loadingGraphs: false,
      fetchError: null,
    }
  },

  async mounted () {
    await this.fetchGraphs()
  },

  methods: {
    onSubmit () {
      this.$emit('change', this.settings)
    },
    onClose () {
      this.$emit('close')
    },
    async fetchGraphs () {
      this.loadingGraphs = true
      this.fetchError = ''
      const endpoint = new Endpoint(this.settings)

      try {
        this.graphs = await endpoint.fetchGraphs()
      } catch (e) {
        this.fetchError = e.toString()
      } finally {
        this.loadingGraphs = false
      }
    },
    addPrefix () {
      this.settings.prefixes.push({ prefix: '', url: '' })
    },
    removePrefix (index) {
      this.settings.prefixes.splice(index, 1)
    },
  }
}
</script>
