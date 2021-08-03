<template>
  <div class="card h-full flex flex-col">
    <div class="card-header has-background-light">
      <h3 class="card-header-title">
        <span v-if="table">{{ table.name }}</span>
        <span v-else>No table selected</span>
      </h3>
      <p class="card-header-icon py-0 px-1">
        <button class="button is-light" @click="onClose" title="Close">
          <XIcon class="icon" />
        </button>
      </p>
    </div>
    <div class="card-content p-0 overflow-auto">
      <table class="table is-fullwidth" v-if="table">
        <thead>
          <tr>
            <th>URI</th>
            <th v-for="(property, index) in table.properties" :key="index">
              {{ property.name }}
            </th>
          </tr>
        </thead>
        <tbody>
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
      </table>
    </div>

    <div class="section relative" v-if="isLoading">
      <b-loading active :is-full-page="false" />
    </div>

    <div class="message is-danger" v-if="error">
      <div class="message-body">
        Error loading data: {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import Term from './Term.vue'
import TermExploreButton from './TermExploreButton.vue'
import XIcon from './icons/XIcon.vue'

export default {
  name: 'TableExplorer',
  props: ['table', 'tables', 'endpoint'],
  components: {
    Term,
    TermExploreButton,
    XIcon,
  },

  async mounted () {
    await this.loadData()
  },

  data () {
    return {
      data: [],
      error: null,
      isLoading: false,
    }
  },

  methods: {
    onClose () {
      this.$emit('close')
    },
    async loadData () {
      this.data = []
      this.error = null

      if (!this.table) {
        return
      }

      this.isLoading = true
      try {
        this.data = await this.endpoint.fetchTableData(this.table)
      } catch (e) {
        this.error = e
        console.error(e)
      } finally {
        this.isLoading = false
      }
    },
  },

  watch: {
    async table () {
      await this.loadData()
    }
  }
}
</script>
