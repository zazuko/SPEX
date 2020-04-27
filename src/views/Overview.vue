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

  async mounted () {
    await this.loadEndpoint(this.settings)
  },

  data () {
    return {
      settings: config,
      endpoint: null,
      settingsShown: false,
      explorerShown: false,
      exploredTable: null,
      tables: [],
      error: null
    }
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
        console.error(e)
      } finally {
        loader.close()
      }
    },
    async loadEndpoint (settings) {
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
    }
  }
}
</script>
