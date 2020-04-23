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

  methods: {
    explore (table) {
      this.$emit('explore', table)
    }
  },

  watch: {
    tables (tables) {
      if (this.plumb) {
        this.plumb.reset()
        this.plumb = null
      }

      if (tables.length === 0) {
        return
      }

      this.plumb = jsPlumb.getInstance({ Container: this.$el })

      // Ensure all child components are in the dom
      this.$nextTick(() => {
        const relations = tables
          .flatMap(table => table.columns)
          .reduce((acc, column) => {
            const source = document.querySelector(`[data-id="${column.id}"]`)
            const target = document.querySelector(`[data-id="${column.type.id}"]`)

            if (source && target) {
              acc.push({ source, target })
            }

            return acc
          }, [])

        this.plumb.ready(() => {
          relations.forEach(this.plumb.connect)
        })
      })
    }
  }
}
</script>
