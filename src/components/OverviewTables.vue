<template>
  <div class="OverviewTables">
    <OverviewTable v-for="table in tables" :key="table.id" :table="table" @explore="explore" />
  </div>
</template>

<style scoped>
.OverviewTables {
  position: relative;
}
</style>

<style>
/* These are not scoped because they are not controlled by vue */
.connection-label {
  font-size: 0.75rem;
}
</style>

<script>
import { jsPlumb } from 'jsplumb'
import OverviewTable from './OverviewTable.vue'

export default {
  name: 'OverviewTables',

  components: {
    OverviewTable
  },

  props: ['tables'],

  data () {
    return {
      plumb: null
    }
  },

  updated () {
    this.$nextTick(this.renderConnections)
  },

  methods: {
    explore (table) {
      this.$emit('explore', table)
    },
    renderConnections () {
      if (this.plumb) {
        this.plumb.reset()
        this.plumb = null
      }

      if (this.tables.length === 0) {
        return
      }

      this.plumb = jsPlumb.getInstance({ Container: this.$el })

      const relations = this.tables
        .flatMap(table => table.columns.map((column) => ({ ...column, table })))
        .reduce((acc, column) => {
          const source = document.querySelector(`[data-id="${column.table.id}"]`)
          const target = document.querySelector(`[data-id="${column.type.id}"]`)

          if (source && target) {
            acc.push({
              source,
              target,
              connector: ['Bezier'],
              endpoint: ['Blank', {}],
              anchor: ['Perimeter', { shape: 'Rectangle' }],
              overlays: [
                ['Arrow', { width: 10, length: 10, location: 1, id: 'arrow' }],
                ['Label', { label: column.name, location: 0.1, id: 'label', cssClass: 'connection-label' }]
              ]
            })
          }

          return acc
        }, [])

      relations.forEach(this.plumb.connect)
    }
  }
}
</script>
