<template>
  <Splitpanes class="default-theme flex-grow overflow-hidden">
    <Pane>
      <Splitpanes horizontal class="h-full">
        <Pane class="flex flex-col">
          <b-navbar shadow>
            <template #start>
              <b-navbar-item tag="div" class="p-0">
                <b-button type="is-white" icon-right="cog" title="Options" @click="showSettings">
                  <h2>
                    <span v-if="endpoint">{{ endpoint.url }}</span>
                    <span v-else>No endpoint configured yet</span>
                  </h2>
                </b-button>
              </b-navbar-item>
            </template>
            <template #end>
              <b-navbar-item tag="div" class="p-0">
                <b-button v-if="endpoint && !error" type="is-white" @click="showShacl">
                  SHACL
                </b-button>
              </b-navbar-item>
            </template>
          </b-navbar>

          <Splitpanes vertical v-if="datamodel" class="overflow-hidden">
            <Pane size="20" v-if="tablesListShown">
              <TablesList
                :datamodel="datamodel"
                @toggle-table="toggleTable"
                @select-viewport="selectViewport"
                @close="hideTablesList"
              />
            </Pane>
            <Pane class="relative h-full">
              <b-button v-show="!tablesListShown" icon-left="bars" class="z-10 absolute m-3" @click="showTablesList">
                Classes
              </b-button>
              <OverviewTables :datamodel="datamodel" @explore="exploreTable" @toggle-table="toggleTable" />
            </Pane>
          </Splitpanes>

          <div class="section relative" v-if="isLoading">
            <b-loading active :is-full-page="false" />
          </div>

          <div class="section" v-if="error">
            <div class="message is-danger">
              <div class="message-body">
                Error loading data: {{ error }}
              </div>
            </div>
          </div>
        </Pane>

        <Pane v-if="tableExplorerShown || resourcesExplorerShown">
          <Splitpanes vertical>
            <Pane v-if="tableExplorerShown">
              <TableExplorer
                :table="exploredTable"
                :endpoint="endpoint"
                @close="hideExplorer"
                @explore-resource="exploreResource"
              />
            </Pane>
            <Pane v-if="resourcesExplorerShown">
              <ResourcesExplorer
                :resources="exploredResources"
                :endpoint="endpoint"
                @close="hideResourcesExplorer"
                @explore-resource="exploreResource"
                @unexplore-resource="unexploreResource"
              />
            </Pane>
          </Splitpanes>
        </Pane>
      </Splitpanes>
    </Pane>
    <Pane v-if="settingsShown" size="30">
      <SettingsPane :settings="settings" @change="loadEndpoint" @close="hideSettings" />
    </Pane>
  </Splitpanes>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import { ModalProgrammatic as Modal } from 'buefy'
import ModalShacl from '@/components/ModalShacl.vue'
import ModalShaclLoad from '@/components/ModalShaclLoad.vue'
import OverviewTables from '@/components/OverviewTables.vue'
import ResourcesExplorer from '@/components/ResourcesExplorer.vue'
import SettingsPane from '@/components/SettingsPane.vue'
import TableExplorer from '@/components/TableExplorer.vue'
import TablesList from '@/components/TablesList.vue'
import { Endpoint } from '@/endpoint'
import { tablesToSHACL, tablesFromSHACL } from '@/shacl'

export default {
  name: 'Spex',
  components: {
    OverviewTables,
    Pane,
    ResourcesExplorer,
    SettingsPane,
    Splitpanes,
    TableExplorer,
    TablesList,
  },

  props: ['settings'],

  data () {
    return {
      endpoint: null,
      settingsShown: false,
      tableExplorerShown: false,
      tablesListShown: false,
      listShown: false,
      exploredTable: null,
      exploredResources: [],
      datamodel: null,
      isLoading: false,
      error: null
    }
  },

  async mounted () {
    await this.loadEndpoint(this.settings)
  },

  computed: {
    resourcesExplorerShown () {
      return this.exploredResources.length > 0
    },
  },

  methods: {
    async loadData () {
      if (!this.endpoint) {
        throw new Error('No endpoint defined')
      }

      this.resetView()

      this.error = null
      this.isLoading = true
      this.datamodel = null
      try {
        this.datamodel = await this.endpoint.fetchDatamodel()
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
      this.tableExplorerShown = true
      this.exploredTable = table
    },

    exploreResource (resource) {
      this.unexploreResource(resource)
      this.exploredResources.push(resource)
    },

    unexploreResource (resource) {
      this.exploredResources = this.exploredResources.filter((r) => r.id !== resource.id)
    },

    hideResourcesExplorer () {
      this.exploredResources = []
    },

    toggleTable (table, show) {
      table.isShown = show
    },

    selectViewport (viewport) {
      const shownTables = viewport
        ? viewport.tables
        : new Set(this.datamodel.tables.map(({ id }) => id))

      this.datamodel.tables.forEach(table => {
        if (shownTables.has(table.id)) {
          table.isShown = true
        } else {
          table.isShown = false
        }
      })
    },

    showTablesList () {
      this.tablesListShown = true
    },

    hideTablesList () {
      this.tablesListShown = false
    },

    hideExplorer () {
      this.tableExplorerShown = false
    },

    resetView () {
      this.exploredTable = null
      this.tableExplorerShown = false
    },

    showShacl () {
      const shacl = tablesToSHACL(this.datamodel.tables, this.endpoint)
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
              this.datamodel = tablesFromSHACL(dataset, this.endpoint)
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
