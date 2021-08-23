<template>
  <Splitpanes class="default-theme flex-grow overflow-hidden">
    <Pane>
      <Splitpanes horizontal class="h-full">
        <Pane class="flex flex-col">
          <div class="z-10 py-1 shadow-sm flex justify-between items-center">
            <button class="button is-white flex items-center gap-1" title="Options" @click="showSettings">
              <h2>
                <span v-if="endpoint">{{ endpoint.url }}</span>
                <span v-else>No endpoint configured yet</span>
              </h2>
              <CogIcon class="icon" />
            </button>
            <button v-if="endpoint && !error" class="button is-white is-small" @click="showShacl">
              SHACL
            </button>
          </div>

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
              <div class="z-10 absolute m-3">
                <button v-show="!tablesListShown" class="button" @click="showTablesList">
                  <MenuIcon class="icon" />
                  <span>Classes</span>
                </button>
              </div>
              <OverviewTables :datamodel="datamodel" @explore="exploreTable" @toggle-table="toggleTable" />
            </Pane>
          </Splitpanes>

          <div class="m-auto" v-if="isLoading">
            <loading-spinner />
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

    <ModalShacl
      v-if="shaclModalShown"
      :open="shaclModalShown"
      @close="hideShaclModal"
      :endpoint="endpoint"
      :datamodel="datamodel"
      @open-load-shacl="showLoadShacl"
    />
    <ModalShaclLoad
      v-if="shaclLoadModalShown"
      :open="shaclLoadModalShown"
      @close="hideShaclLoadModal"
      :endpoint="endpoint"
      :load="loadShacl"
    />
  </Splitpanes>
</template>

<script>
import { CogIcon, MenuIcon } from '@heroicons/vue/solid'
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import { Endpoint } from '@/endpoint'
import ModalShacl from './ModalShacl.vue'
import ModalShaclLoad from './ModalShaclLoad.vue'
import OverviewTables from './OverviewTables.vue'
import ResourcesExplorer from './ResourcesExplorer.vue'
import SettingsPane from './SettingsPane.vue'
import TableExplorer from './TableExplorer.vue'
import TablesList from './TablesList.vue'
import LoadingSpinner from './LoadingSpinner.vue'

export default {
  name: 'Spex',
  components: {
    CogIcon,
    LoadingSpinner,
    MenuIcon,
    ModalShacl,
    ModalShaclLoad,
    OverviewTables,
    Pane,
    ResourcesExplorer,
    SettingsPane,
    Splitpanes,
    TableExplorer,
    TablesList,
  },
  props: ['settings'],
  emits: ['settings-change'],

  data () {
    return {
      endpoint: null,
      settingsShown: false,
      tableExplorerShown: false,
      tablesListShown: false,
      listShown: false,
      shaclModalShown: false,
      shaclLoadModalShown: false,
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
      this.shaclModalShown = true
    },

    showLoadShacl () {
      this.shaclLoadModalShown = true
    },

    loadShacl (datamodel) {
      this.datamodel = datamodel
    },

    hideShaclModal () {
      this.shaclModalShown = false
    },

    hideShaclLoadModal () {
      this.shaclLoadModalShown = false
    },
  }
}
</script>
