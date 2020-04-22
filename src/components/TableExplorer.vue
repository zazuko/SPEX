<template>
  <div class="card TableExplorer is-size-7" :class="{ open: open }" :style="{ height }">
    <div class="card-header has-background-light">
      <p class="card-header-title">
        <span v-if="table">{{ table.name }}</span>
        <span v-else>No table selected</span>
      </p>
      <p class="card-header-icon">
        <b-button type="is-light" icon-left="times" @click="onClose" title="Close" />
      </p>
    </div>
    <table class="card-content table is-fullwidth" v-if="table">
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
            <p class="term-values" v-for="(value, index) in row[column.id]" :key="index">
              <Term :term="value" />
              <b-button v-if="value.termType === 'NamedNode'" type="is-white" size="is-small" icon-left="table" />
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.TableExplorer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 20em;
  width: 100%;
  z-index: 120;

  transform: translateY(100%);
  transition: 100ms ease-in-out;
}

.TableExplorer.open {
  transform: translateY(0);
}

.card-header-title,
.card-header-icon {
  padding: 0.5rem;
}

.card-content {
  overflow-y: scroll;
}

.term-values {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>

<script>
import { fetchTableData } from '@/fetch-tables'
import Term from './Term.vue'

export default {
  props: ['table', 'settings', 'open'],

  components: {
    Term
  },

  data () {
    return {
      height: '50%',
      data: []
    }
  },

  methods: {
    onClose () {
      this.$emit('close')
    }
  },

  watch: {
    async table (table) {
      if (!table) {
        this.data = []
      }

      const loader = this.$buefy.loading.open({})
      // TODO: Handle errors
      try {
        this.data = await fetchTableData(table, this.settings)
      } finally {
        loader.close()
      }
    }
  }
}
</script>
