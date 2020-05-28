<template>
  <div class="card is-size-7">
    <div class="card-header has-background-light">
      <p class="card-header-title">
        <span v-if="table">{{ table.name }}</span>
        <span v-else>No table selected</span>
      </p>
      <p class="card-header-icon">
        <b-button type="is-light" icon-left="times" @click="onClose" title="Close" />
      </p>
    </div>
    <div class="card-content">
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
            <td>{{ row.id }}</td>
            <td v-for="(column, index) in table.columns" :key="index">
              <p class="term-values" v-for="(value, index) in (row[column.id] || [])" :key="index">
                <Term :term="value" :endpoint="endpoint" />
                <!-- <b-button v-if="value.termType === 'NamedNode'" type="is-white" size="is-small" icon-left="table" /> -->
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="message is-danger" v-if="error">
      <div class="message-body">
        Error loading data: {{ error }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.card-header-title,
.card-header-icon {
  padding: 0.5rem;
}

.card-content {
  padding: 0;
  overflow: auto;
}

.term-values {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>

<script>
import Term from './Term.vue'

export default {
  props: ['table', 'tables', 'endpoint'],

  components: {
    Term
  },

  async mounted () {
    await this.loadData()
  },

  data () {
    return {
      data: [],
      error: null
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

      const loader = this.$buefy.loading.open({})
      try {
        this.data = await this.endpoint.fetchTableData(this.table)
      } catch (e) {
        this.error = e
        console.error(e)
      } finally {
        loader.close()
      }
    }
  },

  watch: {
    async table () {
      await this.loadData()
    }
  }
}
</script>
