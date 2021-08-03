<template>
  <GraphLayout
    :nodes="tablesVisible"
    :links="links"
    :active-links="activeLinks"
    @link-enter="onLinkHover"
    @link-out="onUnhover"
    v-if="tablesVisible.length > 0"
    class="bg-gray-50 flex-grow"
  >
    <template v-slot:node="{ node }">
      <OverviewTable
        :table="node"
        :active-links="activeLinks"
        @explore="$emit('explore', $event)"
        @hide="$emit('toggle-table', $event, false)"
        @hover-title="onHoverTable"
        @unhover-title="onUnhover"
        @hover-property="onHoverProperty"
        @unhover-property="onUnhover"
      />
    </template>
    <template v-slot:default>
      <p v-show="datamodel.isIntrospected" class="z-10 absolute bottom-1 right-1 text-sm text-gray-400">
        introspected
      </p>
    </template>
  </GraphLayout>
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
        .flatMap(table => table.properties.map((property) => ({ ...property, table })))
        .reduce((acc, property) => {
          property.values.forEach((value) => {
            const source = property.table.id
            const target = value.id
            if (tableIds.has(target)) {
              acc.push({ source, target, sourceProperty: property.id, label: property.name })
            }
          })

          return acc
        }, [])
    }
  },

  methods: {
    onHoverTable (table) {
      this.activeLinks = this.links.filter((link) => link.source === table.id)
    },

    onHoverProperty (table, property) {
      this.activeLinks = this.links.filter((link) => (
        link.source === table.id &&
        link.sourceProperty === property.id
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
