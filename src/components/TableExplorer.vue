<template>
  <div class="card h-full flex flex-col">
    <div class="card-header has-background-light">
      <h3 class="card-header-title">
        <span v-if="table">{{ table.name }}</span>
        <span v-else>No table selected</span>
      </h3>
      <p class="card-header-icon py-0 px-1">
        <button class="button is-light" @click="$emit('close')" title="Close">
          <XMarkIcon class="icon" />
        </button>
      </p>
    </div>
    <div class="card-content h-full p-0 overflow-auto flex flex-col">
      <table class="table is-fullwidth mb-0" v-if="table">
        <thead>
          <tr>
            <th>URI</th>
            <th v-for="(property, index) in table.properties" :key="index">
              {{ property.name }}
            </th>
          </tr>
        </thead>
        <tbody class="border-b">
          <tr v-for="(row, index) in data" :key="index">
            <td>
              <p class="flex items-center">
                <Term :term="row.term" :endpoint="endpoint" />
                <TermExploreButton :term="row.term" @explore-resource="$emit('explore-resource', $event)" />
              </p>
            </td>
            <td v-for="(property, index) in table.properties" :key="index">
              <p class="flex items-center" v-for="(value, index) in (row[property.id] || [])" :key="index">
                <Term :term="value" :endpoint="endpoint" />
                <TermExploreButton :term="value" @explore-resource="$emit('explore-resource', $event)" />
              </p>
            </td>
          </tr>
        </tbody>
        <tfoot class="sticky bottom-0" v-show="!isLoading">
          <tr class="bg-gray-50">
            <td :colspan="1 + table.properties.length">
              <div class="flex items-center gap-2">
                <button class="button px-2" :disabled="page === 1" @click="setPage(page - 1)">
                  <ChevronLeftIcon class="w-5 h-5" />
                </button>
                <span>Page {{ page }}</span>
                <button class="button px-2" @click="setPage(page + 1)">
                  <ChevronRightIcon class="w-5 h-5" />
                </button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>

      <div class="flex-grow flex justify-center items-center" v-if="isLoading">
        <loading-spinner />
      </div>

      <div class="message is-danger" v-if="error">
        <div class="message-body">
          Error loading data: {{ error }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Endpoint } from '../endpoint'
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/vue/24/solid'
import LoadingSpinner from './common/loading-spinner.vue'
import { ref, watch, onMounted } from 'vue'
import Term from './Term.vue'
import TermExploreButton from './TermExploreButton.vue'
import { Table } from '../model/data-model.model'

interface Props {
  table: Table | null,
  tables?: Table[],
}
const props = defineProps<Props>()

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const emit = defineEmits<{
  (event: 'close'): void;
  (event: 'explore-resource', value: any): void
}>()

const endpoint = Endpoint.getInstance()

const data = ref<any[]>([])
const error = ref<any>(null)
const isLoading = ref<boolean>(false)
const pageSize = 10
const page = ref<number>(1)

const loadData = async () => {
  data.value = []
  error.value = null

  if (!props.table) {
    return
  }

  const offset = (page.value - 1) * pageSize
  const limit = pageSize

  isLoading.value = true
  try {
    if (endpoint) {
      data.value = await endpoint.fetchTableData(props.table, { offset, limit })
    }
  } catch (e) {
    error.value = e
    // eslint-disable-next-line no-console
    console.error(e)
  } finally {
    isLoading.value = false
  }
}
watch(() => props.table, (first, second) => {
  setPage(1)
})

const setPage = (newPage: number) => {
  page.value = newPage
  loadData()
}

onMounted(() => {
  setPage(1)
})

</script>

<script lang="ts">
export default {
  name: 'TableExplorer'
}
</script>
