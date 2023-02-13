<template>
  <ResourceCard :resource="table" :active-links="activeLinks">
    <template v-slot:actions>
      <div class="flex gap-1">
        <Tooltip :label="`${copiedMessage ? copiedMessage : 'Copy'}`">
          <button class="button is-light is-small" @click="onExportTable(table)">
            <ClipboardCopyIcon class="icon" />
          </button>
        </Tooltip>
        <Tooltip label="Hide">
          <button class="button is-light is-small" @click="$emit('hide', table)">
            <EyeOffIcon class="icon" />
          </button>
        </Tooltip>
        <Tooltip label="Explore">
          <button class="button is-light is-small" @click="$emit('explore', table)">
            <TableIcon class="icon" />
          </button>
        </Tooltip>
      </div>
    </template>
  </ResourceCard>
</template>

<script setup lang="ts">
import { Table } from '@/model/data-model.model'
import Tooltip from './Tooltip.vue'
import { EyeOffIcon, TableIcon, ClipboardCopyIcon } from '@heroicons/vue/solid'
import { ref } from 'vue'
import ResourceCard from './ResourceCard.vue'

interface Props {
  table: Table,
  activeLinks: any
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
  name: 'OverviewTable',
}
</script>
