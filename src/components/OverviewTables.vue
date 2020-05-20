<template>
  <div class="OverviewTables">
    <OverviewTable v-for="table in tables" :key="table.id" :table="table" @explore="explore" />
    <div v-if="tables.length === 0" class="section">
      <p>Nothing to show</p>
    </div>
  </div>
</template>

<style scoped>
.OverviewTables {
  flex-grow: 1;

  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: auto;
}
</style>

<style>
/* These are not scoped because they are not controlled by vue */
.connection-label {
  font-size: 0.75rem;
  font-weight: bold;
  background-color: white;
  border: 1px solid gray;
  padding: 0 0.2rem;

  display: none;
}

.connection:hover + .connection-label {
  display: block;
  z-index: 2;
}

.connection:hover {
  z-index: 1;
  cursor: grab;
}

.connection > path {
  stroke-width: 1px;
}

.connection > path:hover {
  stroke: red;
  stroke-width: 3px;
}

.connection-endpoint {
  z-index: 1;
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

  mounted () {
    this.$nextTick(this.renderConnections)

    window.addEventListener('resize', () => {
      this.renderConnections()
    })
  },

  watch: {
    tables () {
      this.$nextTick(this.renderConnections)
    }
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
          const source = document.querySelector(`[data-id="${column.table.id}${column.id}"]`)
          const target = document.querySelector(`[data-id="${column.type.id}"]`)

          if (source && target) {
            acc.push({
              source,
              target,
              connector: ['Straight'],
              endpoints: [
                ['Dot', { radius: 3, cssClass: 'connection-endpoint' }],
                ['Blank', {}]
              ],
              anchors: [
                ['Left', 'Right'],
                ['Perimeter', { shape: 'Rectangle' }]
              ],
              overlays: [
                ['Arrow', { width: 10, length: 10, location: 1, id: 'arrow' }],
                ['Label', { label: column.name, location: 0.5, id: 'label', cssClass: 'connection-label' }]
              ],
              cssClass: 'connection'
            })
          }

          return acc
        }, [])

      relations.forEach(this.plumb.connect)
    }
  }
}
</script>