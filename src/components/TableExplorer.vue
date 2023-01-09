<template>
  <div class="card h-full flex flex-col">
    <div class="card-header has-background-light">
      <h3 class="card-header-title">
        <span v-if="table">{{ table.name }}</span>
        <span v-else>No table selected</span>
      </h3>
      <p class="card-header-icon py-0 px-1">
        <button class="button is-light" @click="$emit('close')" title="Close">
          <XIcon class="icon" />
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

<script>
import { defineComponent, onMounted, ref, toRefs, watch } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from '@heroicons/vue/solid'
import LoadingSpinner from './LoadingSpinner.vue'
import Term from './Term.vue'
import TermExploreButton from './TermExploreButton.vue'

export default defineComponent({
  name: 'TableExplorer',
  props: ['table', 'tables', 'endpoint'],
  emits: ['close', 'explore-resource'],
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
    LoadingSpinner,
    Term,
    TermExploreButton,
    XIcon,
  },

  setup (props) {
    const { endpoint, table } = toRefs(props)

    const data = ref([])
    const error = ref(null)
    const isLoading = ref(false)

    const pageSize = 10
    const page = ref(1)

    const loadData = async () => {
      data.value = []
      error.value = null

      if (!table.value) return

      const offset = (page.value - 1) * pageSize
      const limit = pageSize

      isLoading.value = true
      try {
        data.value = await endpoint.value.fetchTableData(table.value, { offset, limit })
      } catch (e) {
        error.value = e

        // eslint-disable-next-line no-console
        console.error(e)
      } finally {
        isLoading.value = false
      }
    }

    const setPage = (newPage) => {
      page.value = newPage
      loadData()
    }

    onMounted(loadData)
    watch(table, () => { setPage(1) })

    return {
      data,
      error,
      isLoading,
      page,
      setPage,
    }
  },
})
</script>
