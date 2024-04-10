<template>
  <div class="border dark:border-gray-500 rounded-lg shadow-md bg-white dark:bg-gray-800 opacity-90 text-sm"
    :class="{ active: isActive }">
    <!-- header -->
    <header class="bg-gray-100 dark:bg-gray-900 flex items-center gap-4 justify-between px-3 py-2 rounded-lg"
      @mouseenter="$emit('hover-title', table)" @mouseleave="$emit('unhover-title', table)">
      <Tooltip :label="table.id">
        <h3 class="font-bold">
          {{ table.name }}
        </h3>
      </Tooltip>
      <ShapeComponentActions :table="table" @export="$emit('export', table)" @hide="$emit('hide', table)"
        @explore="$emit('explore', table)" />
    </header>
    <!-- end header -->

    <table class="w-full">
      <tr class="border-b last:border-b-0 hover:bg-orange-400 hover:bg-opacity-20 text-gray-800 dark:text-gray-50"
        v-for="(property, index) in table.properties" :key="index" :data-id="property.id"
        :class="{ active: isPropertyActive(property) }" @mouseenter="$emit('hover-property', table, property)"
        @mouseleave="$emit('unhover-property', table, property)">
        <th class="text-inherit dark:border-gray-500 px-3 py-2 ">
          <Tooltip :label="property.id">
            <span @mousedown="stop">{{ property.name }}</span>
          </Tooltip>
        </th>
        <td class="text-inherit dark:border-gray-500 px-3 py-2">
          <div v-for="value in property.values" :key="value.id">
            <slot name="property-value" :value="value">
              <Tooltip :label="value.id">
                <span @mousedown="stop">{{ value.name }}</span>
              </Tooltip>
            </slot>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Link, Property, Table } from '../../model/data-model.model'
import { computed } from 'vue'
import Tooltip from '../common/tooltip.vue'
import ShapeComponentActions from './shape-component-actions.vue'

interface Props {
  table: Table,
  activeLinks: Link[]
}
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const props = defineProps<Props>()

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const emit = defineEmits<{
  (event: 'hide', value: Table): void;
  (event: 'explore', value: Table): void,
  (event: 'export', value: Table): void,
  (event: 'hover-title', value: Table): void;
  (event: 'unhover-title', value: Table): void,
  (event: 'hover-property', table: Table, property: Property): void,
  (event: 'unhover-property', table: Table, property: Property): void
}>()

function stop(event: MouseEvent): void {
  event.stopPropagation()
}

const isActive = computed(() => {
  return props.activeLinks.some((link) => link.target === props.table.id)
})

function isPropertyActive(property: Property): boolean {
  return props.activeLinks.some((link) => (
    link.source === props.table.id &&
    link.sourceProperty === property.id
  ))
}

</script>

<script lang="ts">

export default {
  name: 'ShapeComponent',
}
</script>
