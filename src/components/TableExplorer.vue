<template>
  <div class="card h-full flex flex-col">
    <div class="card-header has-background-light">
      <h3 class="card-header-title">
        <span v-if="table">{{ table.name }}</span>
        <span v-else>No table selected</span>
      </h3>
      <p class="card-header-icon py-0 px-1">
        <b-button type="is-light" icon-left="times" @click="onClose" title="Close" />
      </p>
    </div>
    <div class="card-content p-0 overflow-auto">
      <table class="table is-fullwidth" v-if="table">
        <thead>
          <tr>
            <th>URI</th>
            <th v-for="(column, index) in table.columns" :key="index">
              {{ column.name }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in data" :key="index">
            <td>
              <TermLink :uri="row.id">
                {{ row.id }}
              </TermLink>
            </td>
            <td v-for="(column, index) in table.columns" :key="index">
              <p class="flex items-center" v-for="(value, index) in (row[column.id] || [])" :key="index">
                <Term :term="value" :endpoint="endpoint" />
                <TermDescribe :term="value" :endpoint="endpoint" />
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <b-loading :active="isLoading" />

    <div class="message is-danger" v-if="error">
      <div class="message-body">
        Error loading data: {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import Term from './Term.vue'
import TermDescribe from './TermDescribe.vue'
import TermLink from './TermLink.vue'

export default {
  name: 'TableExplorer',
  props: ['table', 'tables', 'endpoint'],

  components: {
    Term,
    TermDescribe,
    TermLink,
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
