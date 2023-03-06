<template>
  <ResourceCard :resource="table" :active-links="activeLinks">
    <template v-slot:actions>
      <div class="flex gap-1">
        <Tooltip :label="`${copiedMessage ? copiedMessage : 'Copy'}`">
          <button class="button is-light is-small" @click="onExportTable(table)">
            <ClipboardDocumentIcon class="icon" />
          </button>
        </Tooltip>
        <Tooltip label="Hide">
          <button class="button is-light is-small" @click="$emit('hide', table)">
            <EyeSlashIcon class="icon" />
          </button>
        </Tooltip>
        <Tooltip label="Explore">
          <button class="button is-light is-small" @click="$emit('explore', table)">
            <TableCellsIcon class="icon" />
          </button>
        </Tooltip>
      </div>
    </template>
  </ResourceCard>
</template>

<script setup lang="ts">
import { Link, Table } from '@/model/data-model.model'
import { EyeSlashIcon, TableCellsIcon, ClipboardDocumentIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'
import ResourceCard from '../ResourceCard.vue'
import Tooltip from '../common/tooltip.vue'

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
const copiedMessage = ref<string | null>(null)

function onExportTable(table: Table): void {
  emit('export', table)
  copiedMessage.value = '👍'
  setTimeout(() => { copiedMessage.value = null }, 1500)
}

</script>

<script lang="ts">

export default {
  name: 'ShapeComponent',
}
</script>