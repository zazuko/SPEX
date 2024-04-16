<template>
  <!--- the data model graph view ---->
  <GraphLayout :nodes="tablesVisible" :links="links" :active-links="activeLinks" :layoutCfg="layoutConfig"
    @link-enter="onLinkHover" @link-out="onUnhover" v-if="tablesVisible.length > 0"
    class="bg-light dark:bg-dark flex-grow">
    <template v-slot:node="{ node }">
      <!--- a data model shape ---->
      <ShapeComponent :table="node" :active-links="activeLinks" @explore="$emit('explore', $event)"
        @hide="$emit('toggle-shape', $event, false)" @export="$emit('export', $event)" @hover-title="onHoverTable"
        @unhover-title="onUnhover" @hover-property="onHoverProperty" @unhover-property="onUnhover" />
    </template>
    <template v-slot:default>
      <slot />
      <p v-show="datamodel.isIntrospected" class="z-10 absolute bottom-2 right-2 text-sm text-gray-400">
        introspected
      </p>
    </template>
  </GraphLayout>
  <div v-else class="flex-grow bg-light dark:bg-dark flex flex-col items-center justify-center">
    <p class="pb-4">No classes to show</p>
  </div>
</template>

<script setup lang="ts">
import ShapeComponent from './shape-component.vue'
import { GraphLayout } from '@zazuko/vue-graph-layout'
import { DataModel, Link, Property, Table } from '../../model/data-model.model'
import { computed, ref } from 'vue'

interface Props {
  datamodel: DataModel
}
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const props = defineProps<Props>()

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const emit = defineEmits<{
  (event: 'explore', value: Table): void;
  (event: 'toggle-shape', value: Table): void
  (event: 'export', value: Table): void
}>()

const activeLinks = ref<Link[]>([])

const tablesVisible = computed(() => {
  return props.datamodel.tables.filter(({ isShown }) => isShown)
})
/**
  rankdir: The direction in which the graph is laid out. Can be "TB" (top to bottom), "BT" (bottom to top), "LR" (left to right), or "RL" (right to left).
  align: Determines how the nodes are aligned within their rank. Can be "UL" (up and left), "UR" (up and right), "DL" (down and left), "DR" (down and right), or undefined.
  nodesep: The minimum distance between nodes on the same rank.
  ranksep: The minimum distance between ranks.
  marginx: The margin to be added to the left and right of the graph.
  marginy: The margin to be added to the top and bottom of the graph.
*/
const layoutConfig = {
  rankdir: 'LR',
  align: 'UR',
  nodesep: 40,
  ranksep: 500,
  marginx: 10,
  marginy: 10
}
const links = computed(() => {
  const tableIds = new Set(tablesVisible.value.map(({ id }) => id))
  return tablesVisible.value
    .flatMap(table => table.properties.map((property) => ({ ...property, table })))
    .reduce((acc: Link[], property) => {
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
)

function onHoverTable(table: Table): void {
  activeLinks.value = links.value.filter((link) => link.source === table.id)
}

function onHoverProperty(table: Table, property: Property) {
  activeLinks.value = links.value.filter((link) => (
    link.source === table.id &&
    link.sourceProperty === property.id
  ))
}

function onUnhover() {
  activeLinks.value = []
}

function onLinkHover(link: any) {
  activeLinks.value = [link]
}
</script>

<script lang="ts">

export default {
  name: 'DataModelComponent'
}

</script>
