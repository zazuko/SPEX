<template>
  <Splitpanes class="default-theme flex-grow overflow-hidden">
    <Pane>
      <Splitpanes horizontal class="h-full">
        <Pane class="flex flex-col bg-light dark:bg-dark">
          <!-- header -->
          <SpexHeader :isSettingsEditorShown="isSettingsEditorShown" :sparqlEndpointUrl="endpoint.sparqlEndpoint"
            @toggle-settings-editor=toggleSettingsEditor @toggle-prefix-help="onOpenPrefixHelp" />
          <!-- end header -->
          <Splitpanes vertical v-if="datamodel" class="overflow-hidden">
            <!-- pane with class filter and ViewPorts -->
            <Pane size="30" v-if="isTablesListShown">
              <TableList :datamodel="datamodel" @toggle-table="toggleTable" @select-viewport="selectViewport"
                @close="hideTablesList" />
            </Pane>
            <!-- end pane with class filter and ViewPorts -->
            <!-- center pane with GraphView -->
            <Pane class="relative h-full">
              <div class="z-10 absolute m-3">
                <button v-show="!isTablesListShown" class="button" @click="showTablesList">
                  <Bars3Icon class="icon" />
                  <span>Classes</span>
                </button>
              </div>
              <DataModelComponent :datamodel="datamodel" @explore="exploreTable" @export="onExportTable"
                @toggle-shape="toggleTable">
                <template v-slot:default>
                  <p v-show="!(isTableExplorerShown || resourcesExplorerShown)"
                    class="z-10 absolute bottom-2 left-2 text-sm bg-gray-50 dark:bg-gray-700 flex items-center gap-2">
                    <button v-if="endpoint && !error" class="button is-white is-small" @click="showShacl">
                      SHACL
                    </button>
                  </p>
                </template>
              </DataModelComponent>
              <!-- end center pane with GraphView -->
            </Pane>
            <!-- prefix zazuko.com pane -->
            <Pane size="30" v-if="isPrefixHelpShown">
              <PrefixHelp @close="onPrefixHelpClose" :search-string="prefixSearchTerm"></PrefixHelp>
            </Pane>
            <!-- end prefix zazuko.com pane -->
          </Splitpanes>

          <!-- spinner while loading data -->
          <div class="bg-light dark:bg-dark flex-grow flex items-center">
            <div class="m-auto" v-if="isLoading">
              <loading-spinner />
            </div>
          </div>
          <!-- end spinner while loading data -->

          <!-- error info -->
          <div class="section" v-if="error">
            <div class="message is-danger">
              <div class="message-body">
                Error loading data: {{ error }}
              </div>
            </div>
          </div>
          <!-- end error info -->
        </Pane>

        <!-- instance data viewer -->
        <Pane v-if="isTableExplorerShown || resourcesExplorerShown">
          <Splitpanes vertical>
            <Pane v-if="isTableExplorerShown">
              <TableExplorer :table="exploredTable" @close="hideExplorer" @explore-resource="exploreResource" />
            </Pane>
            <Pane v-if="resourcesExplorerShown">
              <ResourcesExplorer :resources="exploredResources" @close="hideResourcesExplorer"
                @explore-resource="exploreResource" @unexplore-resource="unexploreResource" />
            </Pane>
          </Splitpanes>
        </Pane>
      </Splitpanes>
      <!-- end instance data viewer -->
    </Pane>
    <!-- settings pane -->
    <Pane v-if="isSettingsEditorShown" size="30">
      <SettingsPane :settings="settings" @settingsChanged="onSettingsChanged" @close="toggleSettingsEditor" />
    </Pane>
    <!-- end settings pane -->
    <ModalShacl v-if="isShaclModalShown && datamodel !== null" :open="isShaclModalShown" @close="hideShaclModal"
      :endpoint="endpoint" :datamodel="datamodel" @open-load-shacl="showLoadShacl" />
    <ModalShaclLoad v-if="isShaclLoadModalShown" :open="isShaclLoadModalShown" @close="hideShaclLoadModal"
      :endpoint="endpoint" :load="loadShacl" />
  </Splitpanes>
</template>

<script setup lang="ts">
import { Bars3Icon } from '@heroicons/vue/24/solid'
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import { Endpoint } from '../endpoint'
import ModalShacl from './shacl-dialog/modal-shacl.vue'
import ModalShaclLoad from './shacl-dialog/modal-shacl-load.vue'
import DataModelComponent from './data-model/data-model-component.vue'
import ResourcesExplorer from './ResourcesExplorer.vue'
import SettingsPane from './settings/settings-pane.vue'
import TableExplorer from './TableExplorer.vue'
import TableList from './table-list/table-list.vue'
import LoadingSpinner from './common/loading-spinner.vue'
import { sh, rdf } from '../namespace'
import { Settings } from '../model/settings.model'
import { computed, onMounted, ref, watch } from 'vue'
import { DataModel, Table } from '../model/data-model.model'
import SpexHeader from './common/spex-header.vue'
import PrefixHelp from './prefix-help/prefix-zazuko.vue'

interface Props {
  settings: Settings
}
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const props = defineProps<Props>()
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const emit = defineEmits<{
  (event: 'settingsChanged', value: Settings): void;
}>()

const prefixSearchTerm = ref<string>('')
const isPrefixHelpShown = ref<boolean>(false)

const endpoint = Endpoint.getInstance(props.settings)
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

const exploredTable = ref<Table | null>(null)
const exploredResources = ref<any[]>([])
const datamodel = ref<DataModel | null>(null)
const isLoading = ref<boolean>(false)
const error = ref<any>(null)

function onOpenPrefixHelp() {
  isPrefixHelpShown.value = !isPrefixHelpShown.value
}

function onPrefixHelpClose(): void {
  isPrefixHelpShown.value = false
}
function toggleSettingsEditor(newState?: boolean): void {
  if (typeof (newState) === 'undefined') {
    isSettingsEditorShown.value = !isSettingsEditorShown.value
    return
  }
  isSettingsEditorShown.value = newState
}
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

async function loadDataModel(): Promise<void> {
  resetView()
  error.value = null
  isLoading.value = true
  datamodel.value = null
  try {
    datamodel.value = await endpoint.fetchDataModel()
  } catch (e) {
    error.value = e
    toggleSettingsEditor(true)
    // eslint-disable-next-line no-console
    console.error(e)
  } finally {
    isLoading.value = false
  }
}

async function loadEndpoint(settings: Settings): Promise<void> {
  endpoint.applySettings(settings)
  await loadDataModel()
}

function exploreTable(table: Table) {
  isTableExplorerShown.value = true
  exploredTable.value = table
}

async function onExportTable(table: Table): Promise<void> {
  const shapePtr = endpoint.dataModelToSHACL(datamodel.value).namedNode(table.id).in(sh.targetClass)
  const subject = shapePtr.value
  const targetClass = shapePtr.out(sh.targetClass).value
  let shapeString = `_:${subject} a <http://www.w3.org/ns/shacl#NodeShape> ;`
  shapeString += `\n\t<${sh.targetClass.value}> <${targetClass}> ;`
  const properties = shapePtr.out(sh.property)
  if (properties.values.length > 0) {
    shapeString += `\n\t<${sh.property.value}> `
    properties.toArray().forEach((propertyPtr, index: number) => {
      shapeString += '\n\t\t['
      const propertyType = propertyPtr.out(rdf.type).value

      const path = propertyPtr.out(sh.path).value
      const shClass = propertyPtr.out(sh.class).value
      const datatype = propertyPtr.out(sh.datatype).value
      const shOr = propertyPtr.out(sh.or)
      let propertyString = `\t\t\t<${rdf.type}> <${propertyType}> ;\n\t\t\t<http://www.w3.org/ns/shacl#path> <${path}> ;\n`
      propertyString += shClass ? `\t\t\t<http://www.w3.org/ns/shacl#class> <${shClass}> ;\n` : ''
      propertyString += datatype ? `\t\t\t<http://www.w3.org/ns/shacl#datatype> <${datatype}> ;\n` : ''

      if (shOr.values.length > 0) {
        let shOrString = '\t\t\t<http://www.w3.org/ns/shacl#shOr> (\n'
        const shOrList = shOr.list()
        const shOrArray = shOrList === null ? [] : [...shOrList]
        shOrArray.forEach((x: any) => {
          const shOrMemberLines: string[] = []
          x.dataset.match(x.term, null, null, null).filter(quad => !(quad.predicate.equals(rdf.last) || quad.predicate.equals(rdf.last) || quad.predicate.equals(rdf.nil))).forEach(q => shOrMemberLines.push(`\t\t\t\t\t<${q.predicate.value}> <${q.object.value}> ;`))
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
