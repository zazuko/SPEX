<template>
  <graph-layout
    :nodes="tablesVisible"
    :links="links"
    :active-links="activeLinks"
    @link-enter="onLinkHover"
    @link-out="onUnhover"
    v-if="tablesVisible.length > 0"
  >
    <template v-slot:node="{ node }">
      <OverviewTable
        :table="node"
        :id="node.id"
        :active-links="activeLinks"
        @explore="$emit('explore', $event)"
        @hide="$emit('toggle-table', $event, false)"
        @hover-table="onHoverTable"
        @unhover-table="onUnhover"
        @hover-column="onHoverColumn"
        @unhover-column="onUnhover"
      />
    </template>
    <template v-slot:default>
      <p v-show="datamodel.isIntrospected" class="z-10 absolute bottom-1 right-1 text-sm text-gray-400">
        introspected
      </p>
    </template>
  </graph-layout>
  <div v-else class="flex-grow bg-gray-50 flex flex-col items-center justify-center">
    <p class="pb-4">No classes to show</p>
  </div>
</template>

<script>
import GraphLayout from './GraphLayout.vue'
import OverviewTable from './OverviewTable.vue'

export default {
  name: 'OverviewTables',
  components: { GraphLayout, OverviewTable },
  props: ['datamodel'],

  data () {
    return {
      activeLinks: [],
    }
  },

  computed: {
    tablesVisible () {
      return this.datamodel.tables.filter(({ isShown }) => isShown)
    },

    links () {
      const tableIds = new Set(this.tablesVisible.map(({ id }) => id))
      return this.tablesVisible
        .flatMap(table => table.columns.map((column) => ({ ...column, table })))
        .reduce((acc, column) => {
          column.types.forEach((type) => {
            const source = column.table.id
            const target = type.id
            if (tableIds.has(target)) {
              acc.push({ source, target, sourceColumn: column.id, label: column.name })
            }
          })

          return acc
        }, [])
    }
  },

  methods: {
    onHoverTable (table) {
      this.activeLinks = this.links.filter((link) => link.source.id === table.id)
    },

    onHoverColumn (table, column) {
      this.activeLinks = this.links.filter((link) => (
        link.source.id === table.id &&
        link.sourceColumn === column.id
      ))
    },

    onUnhover () {
      this.activeLinks = []
    },

    onLinkHover (link) {
      this.activeLinks = [link]
    },
  }
}
</script>
