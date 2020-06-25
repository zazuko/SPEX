<template>
  <div class="Overview">
    <Splitpanes class="default-theme">
      <Pane>
        <Splitpanes horizontal>
          <Pane>
            <div class="OverviewPane">
              <b-button type="is-white" icon-right="cog" title="Options" @click="showSettings">
                <h2 class="title is-6">
                  <span v-if="endpoint">{{ endpoint.url }}</span>
                  <span v-else>No endpoint configured yet</span>
                </h2>
              </b-button>

              <OverviewTables :tables="tables" @explore="exploreTable" />

              <div class="section" v-if="error">
                <div class="message is-danger">
                  <div class="message-body">
                    Error loading data: {{ error }}
                  </div>
                </div>
              </div>
            </div>
          </Pane>

          <Pane v-if="explorerShown">
            <TableExplorer :table="exploredTable" :endpoint="endpoint" @close="hideExplorer" />
          </Pane>
        </Splitpanes>
      </Pane>
      <Pane v-if="settingsShown" size="30">
        <SettingsPane :settings="settings" @change="loadEndpoint" @close="hideSettings" />
      </Pane>
    </Splitpanes>
  </div>
</template>

<style scoped>
.Overview {
  flex-grow: 1;
  overflow-y: hidden;
}

.OverviewPane {
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
}

.splitpanes .splitpanes__pane {
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>

<script>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import { NavigationFailureType } from 'vue-router/src/history/errors'
import OverviewTables from '@/components/OverviewTables.vue'
import SettingsPane from '@/components/SettingsPane.vue'
import TableExplorer from '@/components/TableExplorer.vue'
import { Endpoint } from '@/endpoint'
import config from '@/config'

export default {
  components: {
    OverviewTables,
    SettingsPane,
    TableExplorer,
    Splitpanes,
    Pane
  },

  data () {
    const urlSettings = settingsFromURL(this.$route.query)
    const settings = { ...config, ...urlSettings }

    return {
      settings,
      endpoint: null,
      settingsShown: false,
      explorerShown: false,
      exploredTable: null,
      tables: [],
      error: null
    }
  },

  async mounted () {
    this.$buefy.notification.open({
      type: 'is-warning',
      message: 'This is a prototype and probably contains some bugs. Don\'t rely on it for anything important',
      hasIcon: true,
      duration: 20000
    })

    await this.loadEndpoint(this.settings)
  },

  methods: {
    async loadData () {
      if (!this.endpoint) {
        throw new Error('No endpoint defined')
      }

      this.resetView()

      this.tables = []
      this.error = null
      const loader = this.$buefy.loading.open({})
      try {
        this.tables = await this.endpoint.fetchTables()
      } catch (e) {
        this.error = e
        this.showSettings()
        console.error(e)
      } finally {
        loader.close()
      }
    },
    async loadEndpoint (settings) {
      await this.updateURL(settings)
      this.endpoint = new Endpoint(settings)
      await this.loadData()
    },
    showSettings () {
      this.settingsShown = true
    },
    hideSettings () {
      this.settingsShown = false
    },
    exploreTable (table) {
      this.explorerShown = true
      this.exploredTable = table
    },
    hideExplorer () {
      this.explorerShown = false
    },
    resetView () {
      this.settingsShown = false
      this.exploredTable = null
      this.explorerShown = false
    },
    async updateURL (settings) {
      const query = urlQueryFromSettings(settings)
      try {
        await this.$router.push({ query })
      } catch (err) {
        // Ignore duplicated navigation error
        if (err.type !== NavigationFailureType.duplicated) {
          throw err
        }
      }
    }
  }
}

const validURLOptions = ['url', 'graph', 'prefixes']

function settingsFromURL (params) {
  return validURLOptions.reduce((settings, option) => {
    if (option in params) {
      settings[option] = deserializeURLParam(option, params[option])
    }
    return settings
  }, {})
}

function urlQueryFromSettings (settings) {
  return validURLOptions.reduce((params, option) => {
    return { ...params, [option]: serializeURLParam(option, settings[option]) }
  }, {})
}

function serializeURLParam (param, value) {
  if (param === 'prefixes') {
    return value.map(({ prefix, url }) => `${prefix}:${url}`)
  }

  return value
}

function deserializeURLParam (param, value) {
  if (param === 'prefixes') {
    if (typeof value === 'string') {
      value = [value]
    }

    return value.map((prefixValue) => {
      const prefix = prefixValue.split(':')[0]
      const url = prefixValue.split(':').slice(1).join(':')
      return { prefix, url }
    })
  }

  return value
}
</script>
