<template>
  <div class="section">
    <h1 class="title">Overview</h1>

    <div class="OverviewTables">
      <OverviewTable v-for="table in tables" :key="table.id" :table="table" />
    </div>
  </div>
</template>

<style scoped>
.OverviewTables {
  display: flex;
  flex-wrap: wrap;
}
</style>

<script>
import { jsPlumb } from 'jsplumb'
import OverviewTable from '@/components/OverviewTable.vue'
import { fetchTables } from '@/fetch-tables'

export default {
  components: {
    OverviewTable
  },

  data () {
    return {
      tables: []
    }
  },

  async mounted () {
    this.tables = await fetchTables()
  },

  watch: {
    tables (tables) {
      setTimeout(() => {
        const relations = tables
          .flatMap(table => table.columns)
          .reduce((acc, column) => {
            const source = document.querySelector(`[data-id="${column.id}"]`)
            const target = document.querySelector(`[data-id="${column.datatype}"]`)

            if (source && target) {
              acc.push({ source, target })
            }

            return acc
          }, [])

        const plumb = jsPlumb.getInstance({
          Container: this.$el
        })

        plumb.ready(() => {
          relations.forEach(plumb.connect)
        })
      }, 0)
    }
  }
}
</script>
