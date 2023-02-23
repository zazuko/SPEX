<template>
  <Splitpanes class="default-theme flex-grow overflow-hidden">
    <Pane>
      <Splitpanes horizontal class="h-full">
        <Pane class="flex flex-col">
          <div class="z-10 py-1 shadow-sm flex justify-between items-center dark:bg-gray-800">
            <h1 class="px-4 py-2 text-3xl text-black dark:text-white font-bold font-title">
              SPEX
            </h1>
            <button class="button is-white dark:is-dark flex items-center gap-1" title="Options" @click="showSettings">
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
              <TablesList :datamodel="datamodel" @toggle-table="toggleTable" @select-viewport="selectViewport"
                @close="hideTablesList" />
            </Pane>
            <Pane class="relative h-full">
              <div class="z-10 absolute m-3">
                <button v-show="!tablesListShown" class="button" @click="showTablesList">
                  <MenuIcon class="icon" />
                  <span>Classes</span>
                </button>
              </div>
              <OverviewTables :datamodel="datamodel" @explore="exploreTable" @export="onExportTable"
                @toggle-table="toggleTable">
                <template v-slot:default>
                  <p v-show="!(tableExplorerShown || resourcesExplorerShown)"
                    class="z-10 absolute bottom-2 left-2 text-sm bg-gray-50 dark:bg-gray-700 flex items-center gap-2">
                    <ZazukoLogo />
                    <span>/</span>
                    <GitHubLogo />
                  </p>
                </template>
              </OverviewTables>
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
              <TableExplorer :table="exploredTable" :endpoint="endpoint" @close="hideExplorer"
                @explore-resource="exploreResource" />
            </Pane>
            <Pane v-if="resourcesExplorerShown">
              <ResourcesExplorer :resources="exploredResources" :endpoint="endpoint" @close="hideResourcesExplorer"
                @explore-resource="exploreResource" @unexplore-resource="unexploreResource" />
            </Pane>
          </Splitpanes>
        </Pane>
      </Splitpanes>
    </Pane>
    <Pane v-if="settingsShown" size="30">
      <SettingsPane :settings="settings" @change="loadEndpoint" @close="hideSettings" />
    </Pane>

    <ModalShacl v-if="shaclModalShown" :open="shaclModalShown" @close="hideShaclModal" :endpoint="endpoint"
      :datamodel="datamodel" @open-load-shacl="showLoadShacl" />
    <ModalShaclLoad v-if="shaclLoadModalShown" :open="shaclLoadModalShown" @close="hideShaclLoadModal"
      :endpoint="endpoint" :load="loadShacl" />
  </Splitpanes>
</template>

<script>
import { CogIcon, MenuIcon } from '@heroicons/vue/solid'
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import { Endpoint } from '@/endpoint'
import ModalShacl from './shacl-dialog/modal-shacl.vue'
import ModalShaclLoad from './shacl-dialog/modal-shacl-load.vue'
import OverviewTables from './OverviewTables.vue'
import ResourcesExplorer from './ResourcesExplorer.vue'
import SettingsPane from './settings/settings-pane.vue'
import TableExplorer from './TableExplorer.vue'
import TablesList from './TablesList.vue'
import LoadingSpinner from './common/loading-spinner.vue'
import { sh, rdf } from '../namespace'
import GitHubLogo from './common/git-hub-logo.vue'
import ZazukoLogo from './common/zazuko-logo.vue'

export default {
  name: 'SpexMain',
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
    GitHubLogo,
    ZazukoLogo
  },
  props: ['settings'],
  emits: ['settings-change'],

  data() {
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

  async mounted() {
    await this.loadEndpoint(this.settings)
  },

  computed: {
    resourcesExplorerShown() {
      return this.exploredResources.length > 0
    },
  },

  methods: {
    async loadData() {
      if (!this.endpoint) {
        throw new Error('No endpoint defined')
      }

      this.resetView()

      this.error = null
      this.isLoading = true
      this.datamodel = null
      try {
        this.datamodel = await this.endpoint.fetchDataModel()
      } catch (e) {
        this.error = e
        this.showSettings()

        // eslint-disable-next-line no-console
        console.error(e)
      } finally {
        this.isLoading = false
      }
    },

    async loadEndpoint(settings) {
      this.$emit('settings-change', settings)

      if (settings.url) {
        this.endpoint = new Endpoint(settings)
        await this.loadData()
      } else {
        this.endpoint = null
      }
    },

    showSettings() {
      this.settingsShown = true
    },

    hideSettings() {
      this.settingsShown = false
    },

    exploreTable(table) {
      this.tableExplorerShown = true
      this.exploredTable = table
    },

    async onExportTable(table) {
      const shapePtr = this.endpoint.dataModelToSHACL(this.datamodel).namedNode(table.id).in(sh.targetClass)
      const subject = shapePtr.value
      const targetClass = shapePtr.out(sh.targetClass).value
      let shapeString = `_:${subject} a <http://www.w3.org/ns/shacl#NodeShape> `
      shapeString += `\n\t<${sh.targetClass.value}> <${targetClass}> `
      const properties = shapePtr.out(sh.property)
      if (properties.values.length > 0) {
        shapeString += `\n\t<${sh.property.value}> `
        properties.forEach((propertyPtr, index) => {
          shapeString += '\n\t\t['
          const propertyType = propertyPtr.out(rdf.type).value

          const path = propertyPtr.out(sh.path).value
          const shClass = propertyPtr.out(sh.class).value
          const datatype = propertyPtr.out(sh.datatype).value
          const shOr = propertyPtr.out(sh.or)
          let propertyString = `\t\t\t<${rdf.type}> <${propertyType}> \n\t\t\t<http://www.w3.org/ns/shacl#path> <${path}> \n`
          propertyString += shClass ? `\t\t\t<http://www.w3.org/ns/shacl#class> <${shClass}> \n` : ''
          propertyString += datatype ? `\t\t\t<http://www.w3.org/ns/shacl#datatype> <${datatype}> \n` : ''

          if (shOr.values.length > 0) {
            let shOrString = '\t\t\t<http://www.w3.org/ns/shacl#shOr> (\n'
            const shOrList = shOr.list()
            Array.from(shOrList).forEach(x => {
              const shOrMemberLines = []
              x.dataset.match(x.term, null, null, null).filter(quad => !(quad.predicate.equals(rdf.last) || quad.predicate.equals(rdf.last) || quad.predicate.equals(rdf.nil))).forEach(q => shOrMemberLines.push(`\t\t\t\t\t<${q.predicate.value}> <${q.object.value}>`))
              shOrString += `\t\t\t\t[\n${shOrMemberLines.join(' \n')}`
              shOrString += ' \n\t\t\t\t]\n'
            })
            propertyString += `${shOrString}`
            propertyString += '\t\t\t) \n'
          }
          shapeString += `\n${propertyString}\t\t] ${index === (properties.values.length - 1) ? '.' : ','}`
        })
      }
      await navigator.clipboard.writeText(shapeString)
    },

    exploreResource(resource) {
      this.unexploreResource(resource)
      this.exploredResources.push(resource)
    },

    unexploreResource(resource) {
      this.exploredResources = this.exploredResources.filter((r) => r.id !== resource.id)
    },

    hideResourcesExplorer() {
      this.exploredResources = []
    },

    toggleTable(table, show) {
      table.isShown = show
    },

    selectViewport(viewport) {
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

    showTablesList() {
      this.tablesListShown = true
    },

    hideTablesList() {
      this.tablesListShown = false
    },

    hideExplorer() {
      this.tableExplorerShown = false
    },

    resetView() {
      this.exploredTable = null
      this.tableExplorerShown = false
    },

    showShacl() {
      this.shaclModalShown = true
    },

    showLoadShacl() {
      this.shaclLoadModalShown = true
    },

    loadShacl(datamodel) {
      this.datamodel = datamodel
    },

    hideShaclModal() {
      this.shaclModalShown = false
    },

    hideShaclLoadModal() {
      this.shaclLoadModalShown = false
    },
  }
}
</script>
