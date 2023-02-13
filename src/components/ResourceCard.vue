<template>
  <div class="border dark:border-gray-500 rounded shadow-md bg-white dark:bg-gray-800 opacity-90 text-sm"
    :class="{ active: isActive }">
    <header class="bg-gray-100 dark:bg-gray-900 flex items-center gap-4 justify-between px-3 py-2"
      @mouseenter="$emit('hover-title', resource)" @mouseleave="$emit('unhover-title', resource)">
      <h3 class="font-bold">
        <Tooltip :label="resource.id">
          {{ resource.name }}
        </Tooltip>
      </h3>
      <span class="flex flex-nowrap">
        <slot name="actions" />
      </span>
    </header>
    <table class="w-full">
      <tr v-for="(property, index) in resource.properties" :key="index" :data-id="property.id"
        :class="{ active: isPropertyActive(property) }" @mouseenter="$emit('hover-property', resource, property)"
        @mouseleave="$emit('unhover-property', resource, property)">
        <th class="border-b dark:border-gray-500 px-3 py-2 text-gray-800 dark:text-gray-50">
          <Tooltip :label="property.id">
            {{ property.name }}
          </Tooltip>
        </th>
        <td class="border-b dark:border-gray-500 px-3 py-2">
          <div v-for="value in property.values" :key="value.id">
            <slot name="property-value" :value="value">
              <Tooltip :label="value.id">
                {{ value.name }}
              </Tooltip>
            </slot>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Link, Property, Table } from '@/model/data-model.model'
import { computed } from 'vue'
import Tooltip from './Tooltip.vue'

interface Props {
  resource: Table,
  activeLinks: Link[]
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const props = defineProps<Props>()

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const emit = defineEmits<{
  (event: 'hover-title', value: Table): void;
  (event: 'unhover-title', value: Table): void,
  (event: 'hover-property', value: Property): void,
  (event: 'unhover-property', value: Property): void
}>()

const isActive = computed(() => {
  return props.activeLinks.some((link) => link.target === props.resource.id)
})

function isPropertyActive(property: Property): boolean {
  return props.activeLinks.some((link) => (
    link.source === props.resource.id &&
    link.sourceProperty === property.id
  ))
}

</script>

<script lang="ts">

export default {
  name: 'ResourceCard'
}
</script>

<style scoped>
.active {
  border: 2px solid #ffb15e
}
</style>
