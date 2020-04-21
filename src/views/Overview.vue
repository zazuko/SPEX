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
}
</style>

<script>
import { jsPlumb } from 'jsplumb'
import OverviewTable from '@/components/OverviewTable.vue'

export default {
  components: {
    OverviewTable
  },

  data () {
    return {
      tables: [
        {
          id: 'tiger',
          name: 'Tiger',
          columns: [
            { id: 'name', name: 'Name', datatype: 'string' },
            { id: 'friend', name: 'Friend', datatype: 'cat' }
          ]
        },
        {
          id: 'cat',
          name: 'Cat',
          columns: [
            { id: 'name', name: 'Name', datatype: 'string' }
          ]
        }
      ]
    }
  },

  mounted () {
    const relations = this.tables
      .flatMap(table => table.columns)
      .reduce((acc, column) => {
        const source = document.querySelector(`[data-id="${column.id}"]`)
        const target = document.querySelector(`[data-id="${column.datatype}"]`)

        if (source && target) {
          acc.push({ source, target })
        }

        return acc
      }, [])
    console.log(relations)

    const plumb = jsPlumb.getInstance({
      Container: this.$el
    })

    plumb.ready(() => {
      relations.forEach(plumb.connect)
    })
  }
}
</script>
