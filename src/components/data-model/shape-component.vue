<template>
  <ResourceCard :resource="table" :active-links="activeLinks">
    <template v-slot:actions>
      <!-- actions -->
      <ShapeComponentActions :table="table" @export="$emit('export', table)" @hide="$emit('hide', table)"
        @explore="$emit('explore', table)" />
      <!-- end actions -->
    </template>
  </ResourceCard>
</template>

<script setup lang="ts">
import { Link, Table } from '@/model/data-model.model'
import ResourceCard from '../ResourceCard.vue'
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
  (event: 'export', value: Table): void
}>()

</script>

<script lang="ts">

export default {
  name: 'ShapeComponent',
}
</script>
