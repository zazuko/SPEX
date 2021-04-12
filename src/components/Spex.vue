<template>
  <div class="Overview">
    <Splitpanes class="default-theme">
      <Pane>
        <Splitpanes horizontal>
          <Pane>
            <div class="OverviewPane">
              <b-navbar shadow>
                <template #start>
                  <b-navbar-item tag="div" class="p-0">
                    <b-button type="is-white" icon-right="cog" title="Options" @click="showSettings">
                      <h2 class="title is-6">
                        <span v-if="endpoint">{{ endpoint.url }}</span>
                        <span v-else>No endpoint configured yet</span>
                      </h2>
                    </b-button>
                  </b-navbar-item>
                </template>
                <template #end>
                  <b-navbar-item tag="div" class="p-0">
                    <b-button v-if="endpoint && !error" type="is-white" size="is-small" @click="showShacl">
                      SHACL
                    </b-button>
                  </b-navbar-item>
                </template>
              </b-navbar>

              <Splitpanes vertical>
                <Pane size="20" v-if="tablesListShown">
                  <TablesList :tables="tables" @toggle-table="toggleTable" @close="hideTablesList" />
                </Pane>
                <Pane class="is-relative">
                  <b-button v-show="!tablesListShown" icon-left="bars" size="is-small" class="TablesListButton m-3" @click="showTablesList">
                    Classes
                  </b-button>
                  <OverviewTables :tables="tables" @explore="exploreTable" @toggle-table="toggleTable" />
                </Pane>
              </Splitpanes>

              <b-loading :active="isLoading" />

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

<script>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import { ModalProgrammatic as Modal } from 'buefy'
import ModalShacl from '@/components/ModalShacl.vue'
import ModalShaclLoad from '@/components/ModalShaclLoad.vue'
import OverviewTables from '@/components/OverviewTables.vue'
import SettingsPane from '@/components/SettingsPane.vue'
import TableExplorer from '@/components/TableExplorer.vue'
import TablesList from '@/components/TablesList.vue'
import { Endpoint } from '@/endpoint'
import { tablesToSHACL, tablesFromSHACL } from '@/shacl'

export default {
  name: 'Spex',
  components: { OverviewTables, Pane, SettingsPane, Splitpanes, TableExplorer, TablesList },

  props: ['settings'],

  data () {
    return {
      endpoint: null,
      settingsShown: false,
      explorerShown: false,
      tablesListShown: false,
      listShown: false,
      exploredTable: null,
      tables: [],
      isLoading: false,
      error: null
    }
  },

  async mounted () {
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
      this.isLoading = true
      try {
        this.tables = await this.endpoint.fetchTables()
      } catch (e) {
        this.error = e
        this.showSettings()
        console.error(e)
      } finally {
        this.isLoading = false
      }
    },

    async loadEndpoint (settings) {
      this.$emit('settings-change', settings)

      if (settings.url) {
        this.endpoint = new Endpoint(settings)
        await this.loadData()
      } else {
        this.endpoint = null
      }
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

    toggleTable (table, show) {
      table.isShown = show
    },

    showTablesList () {
      this.tablesListShown = true
    },

    hideTablesList () {
      this.tablesListShown = false
    },

    hideExplorer () {
      this.explorerShown = false
    },

    resetView () {
      this.settingsShown = false
      this.exploredTable = null
      this.explorerShown = false
    },

    showShacl () {
      const shacl = tablesToSHACL(this.tables, this.endpoint)
      Modal.open({
        parent: this,
        component: ModalShacl,
        props: { shacl, loadShacl: this.loadShacl },
        hasModalCard: true,
        trapFocus: true,
      })
    },

    loadShacl () {
      const modal = Modal.open({
        parent: this,
        component: ModalShaclLoad,
        props: {
          load: (dataset) => {
            modal.close()
            try {
              this.tables = tablesFromSHACL(dataset, this.endpoint)
            } catch (e) {
              console.error(e)
            }
          }
        },
        hasModalCard: true,
        trapFocus: true,
      })
    }
  }
}
</script>

<style scoped>
.Overview {
  flex-grow: 1;
  overflow-y: hidden;
}

.OverviewPane {
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: hidden;
}

.splitpanes .splitpanes__pane {
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.TablesListButton {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}
</style>
