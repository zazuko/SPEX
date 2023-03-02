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
                <span v-if="endpoint">{{ endpoint.sparqlEndpoint }}</span>
                <span v-else>No endpoint configured yet</span>
              </h2>
              <CogIcon class="icon" />
            </button>
            <div v-if="!isSettingsEditorShown" class="flex flex-row items-center mr-2">
              <ZazukoLogo />
              <div style="height: 15px;border-left: 1px solid; margin-left: 6px; margin-right: 8px; width: 1px;"></div>
              <GitHubLogo />
            </div>
            <div v-if="isSettingsEditorShown">
            </div>
          </div>

          <Splitpanes vertical v-if="datamodel" class="overflow-hidden">
            <Pane size="20" v-if="isTablesListShown">
              <TablesList :datamodel="datamodel" @toggle-table="toggleTable" @select-viewport="selectViewport"
                @close="hideTablesList" />
            </Pane>
            <Pane class="relative h-full">
              <div class="z-10 absolute m-3">
                <button v-show="!isTablesListShown" class="button" @click="showTablesList">
                  <Bars3Icon class="icon" />
                  <span>Classes</span>
                </button>
              </div>
              <OverviewTables :datamodel="datamodel" @explore="exploreTable" @export="onExportTable"
                @toggle-table="toggleTable">
                <template v-slot:default>
                  <p v-show="!(isTableExplorerShown || resourcesExplorerShown)"
                    class="z-10 absolute bottom-2 left-2 text-sm bg-gray-50 dark:bg-gray-700 flex items-center gap-2">
                    <button v-if="endpoint && !error" class="button is-white is-small" @click="showShacl">
                      SHACL
                    </button>
                  </p>
                </template>
              </OverviewTables>
            </Pane>
          </Splitpanes>

          <div class="bg-gray-50 dark:bg-gray-700 flex-grow flex items-center">
            <div class="m-auto" v-if="isLoading">
              <loading-spinner />
            </div>
          </div>

          <div class="section" v-if="error">
            <div class="message is-danger">
              <div class="message-body">
                Error loading data: {{ error }}
              </div>
            </div>
          </div>
        </Pane>

        <Pane v-if="isTableExplorerShown || resourcesExplorerShown">
          <Splitpanes vertical>
            <Pane v-if="isTableExplorerShown">
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
    <Pane v-if="isSettingsEditorShown" size="30">
      <SettingsPane :settings="settings" @settingsChanged="onSettingsChanged" @close="hideSettings" />
    </Pane>

    <ModalShacl v-if="isShaclModalShown" :open="isShaclModalShown" @close="hideShaclModal" :endpoint="endpoint"
      :datamodel="datamodel" @open-load-shacl="showLoadShacl" />
    <ModalShaclLoad v-if="isShaclLoadModalShown" :open="isShaclLoadModalShown" @close="hideShaclLoadModal"
      :endpoint="endpoint" :load="loadShacl" />
  </Splitpanes>
</template>

<script setup lang="ts">
import { CogIcon, Bars3Icon } from '@heroicons/vue/24/solid'
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
import { Settings } from '@/model/settings.model'
import { computed, onMounted, ref, watch } from 'vue'
import { DataModel, Table } from '@/model/data-model.model'

interface Props {
  settings: Settings
}
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const props = defineProps<Props>()
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const emit = defineEmits<{
  (event: 'settingsChanged', value: Settings): void;
}>()

const resourcesExplorerShown = computed(() => {
  return exploredResources.value.length > 0
})

watch(() => props.settings, (newValue: Props['settings']) => {
  if ((newValue.sparqlEndpoint?.length ?? 0) > 0) {
    isSettingsEditorShown.value = false
    loadEndpoint(newValue)
  } else {
    isSettingsEditorShown.value = true
  }
})

onMounted(async () => {
  if (props.settings.sparqlEndpoint) {
    await loadEndpoint(props.settings)
  } else {
    isSettingsEditorShown.value = true
  }
})

const isSettingsEditorShown = ref<boolean>(false)
const isTableExplorerShown = ref<boolean>(false)
const isTablesListShown = ref<boolean>(false)
// const isListShown = ref<boolean>(false)
const isShaclModalShown = ref<boolean>(false)
const isShaclLoadModalShown = ref<boolean>(false)

const endpoint = ref<Endpoint | null>(null)
const exploredTable = ref<Table | null>(null)
const exploredResources = ref<any[]>([])
const datamodel = ref<DataModel | null>(null)
const isLoading = ref<boolean>(false)
const error = ref<any>(null)

function exploreResource(resource: any): void {
  unexploreResource(resource)
  exploredResources.value.push(resource)
}

function unexploreResource(resource): void {
  exploredResources.value = exploredResources.value.filter((r) => r.id !== resource.id)
}

function hideResourcesExplorer(): void {
  exploredResources.value = []
}

function toggleTable(table: Table): void {
  table.isShown = !table.isShown
}

function selectViewport(viewport: any): void {
  const shownTables = viewport
    ? viewport.tables
    : new Set(datamodel.value?.tables.map(({ id }) => id))

  datamodel.value?.tables.forEach(table => {
    if (shownTables.has(table.id)) {
      table.isShown = true
    } else {
      table.isShown = false
    }
  })
}

function showTablesList(): void {
  isTablesListShown.value = true
}

function hideTablesList(): void {
  isTablesListShown.value = false
}

function hideExplorer(): void {
  isTableExplorerShown.value = false
}

function resetView(): void {
  exploredTable.value = null
  isTableExplorerShown.value = false
}

function showShacl(): void {
  isShaclModalShown.value = true
}

function showLoadShacl(): void {
  isShaclLoadModalShown.value = true
}

function loadShacl(newDataModel: DataModel): void {
  datamodel.value = newDataModel
}

function hideShaclModal(): void {
  isShaclModalShown.value = false
}

function hideShaclLoadModal() {
  isShaclLoadModalShown.value = false
}

async function loadData() {
  if (!endpoint.value) {
    throw new Error('No endpoint defined')
  }
  resetView()
  error.value = null
  isLoading.value = true
  datamodel.value = null
  try {
    datamodel.value = await endpoint.value.fetchDataModel()
  } catch (e) {
    error.value = e
    showSettings()
    // eslint-disable-next-line no-console
    console.error(e)
  } finally {
    isLoading.value = false
  }
}

async function loadEndpoint(settings: Settings): Promise<void> {
  if (settings.sparqlEndpoint) {
    endpoint.value = new Endpoint(settings)
    await loadData()
  } else {
    endpoint.value = null
  }
}

function showSettings(): void {
  isSettingsEditorShown.value = true
}

function hideSettings() {
  isSettingsEditorShown.value = false
}

function exploreTable(table: Table) {
  isTableExplorerShown.value = true
  exploredTable.value = table
}

async function onExportTable(table: Table): Promise<void> {
  const shapePtr = endpoint.value?.dataModelToSHACL(datamodel.value).namedNode(table.id).in(sh.targetClass)
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
        Array.from(shOrList).forEach((x: any) => {
          const shOrMemberLines: string[] = []
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
}

function onSettingsChanged(newSettings: Settings) {
  /* bubble up */
  emit('settingsChanged', newSettings)
}
</script>

<script lang="ts">

export default {
  name: 'SpexMain'
}

</script>
