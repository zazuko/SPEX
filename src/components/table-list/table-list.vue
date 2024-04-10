<template>
  <div class="card is-shadowless overflow-y-auto">
    <div class="card-header has-background-light">
      <h3 class="card-header-title">Classes</h3>
      <p class="card-header-icon py-0 px-1">
        <button class="button is-light" @click="$emit('close')">
          <XMarkIcon class="icon" />
        </button>
      </p>
    </div>
    <div class="card-content px-0 py-1">
      <div v-show="datamodel.viewports.length > 0" class="
                                                                                                    field
                                                                                                    m-0
                                                                                                    px-2
                                                                                                    py-2
                                                                                                    border-b
                                                                                                    flex flex-wrap
                                                                                                    justify-end
                                                                                                    items-center
                                                                                                    gap-2
                                                                                                  ">
        <label class="label m-0" for="predefined-views">Predefined views</label>
        <div class="select">
          <select id="predefined-views" @input="selectViewport">
            <option value="">-</option>
            <option v-for="viewport in datamodel.viewports" :key="viewport.id" :value="viewport.id">
              {{ viewport.name }}
            </option>
          </select>
        </div>
      </div>
      <ul>
        <li class="panel-block is-justify-content-space-between">
          <div style="flex-grow:1; display: flex; flex-direction: row; align-items: center;">
            <MagnifyingGlassIcon class="icon" style="margin-right: 5px"></MagnifyingGlassIcon>
            <input type="text" class="input" v-model="searchString" />
          </div>
          <button @click="toggleSorting" style="flex-grow:0; margin-left: 5px; margin-right: 5px; width: 35px">
            <ChevronDownIcon class="icon" v-if="sortDescending" />
            <ChevronUpIcon class="icon" v-if="!sortDescending" />
          </button>
          <SpexSwitch style="flex-grow:0;" :modelValue="toggleAll" @update:modelValue="onToggleAll" />
        </li>
        <TableListItem v-for="table in filteredTables" :key="table.id" :table="table"
          @toggle-table="$emit('toggle-table', table, $event)" />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DataModel, Table } from '../../model/data-model.model'
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { ChevronDownIcon, ChevronUpIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { ref, watch, onMounted } from 'vue'
import SpexSwitch from '../common/switch.vue'
import TableListItem from './table-list-item.vue'

interface Props {
  datamodel: DataModel
}
const props = defineProps<Props>()

const toggleAll = ref<boolean>(true)
const sortDescending = ref<boolean>(false)
const searchString = ref<string>('')
const filteredTables = ref<Table[]>(props.datamodel.tables)

onMounted(() => {
  filteredTables.value = filteredTables.value.sort((a, b) => (b.count ?? 0) - (a.count ?? 0))
})

watch(searchString, (newSearchString, oldSearchString) => {
  if (sortDescending.value) {
    filteredTables.value = props.datamodel.tables.filter(t => t.name.toLocaleLowerCase().indexOf(newSearchString.toLocaleLowerCase()) > -1).sort((a, b) => (a.count ?? 0) - (b.count ?? 0))
  } else {
    filteredTables.value = props.datamodel.tables.filter(t => t.name.toLocaleLowerCase().indexOf(newSearchString.toLocaleLowerCase()) > -1).sort((a, b) => (b.count ?? 0) - (a.count ?? 0))
  }
})

watch(sortDescending, (newSortOrder, oldSortOrder) => {
  if (newSortOrder) {
    filteredTables.value = props.datamodel.tables.filter(t => t.name.toLocaleLowerCase().indexOf(searchString.value.toLocaleLowerCase()) > -1).sort((a, b) => (a.count ?? 0) - (b.count ?? 0))
  } else {
    filteredTables.value = props.datamodel.tables.filter(t => t.name.toLocaleLowerCase().indexOf(searchString.value.toLocaleLowerCase()) > -1).sort((a, b) => (b.count ?? 0) - (a.count ?? 0))
  }
})

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const emit = defineEmits<{
  (event: 'toggle-table', boolean): void;
  (event: 'select-viewport', value: any): void,
  (event: 'close'): void
}>()
const selectViewport = (event) => {
  const id = event.target.value
  const viewport =
    props.datamodel.viewports.find((viewport) => viewport.id === id) ?? null
  emit('select-viewport', viewport)
}

function toggleSorting() {
  sortDescending.value = !sortDescending.value
}
const onToggleAll = (event: boolean) => {
  toggleAll.value = event
  props.datamodel.tables.forEach((table) => {
    table.isShown = event
  })
}

</script>

<script lang="ts">

export default {
  name: 'TableList'
}

</script>
