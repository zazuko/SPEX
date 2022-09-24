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
          <button class="button is-light is-small" @click="$f('hide', table)">
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

<script>
import { ref } from 'vue'
import { EyeOffIcon, TableIcon, ClipboardCopyIcon } from '@heroicons/vue/solid'
import ResourceCard from './ResourceCard.vue'
import Tooltip from './Tooltip.vue'

export default {
  name: 'OverviewTable',
  props: ['table', 'activeLinks'],
  emits: ['hide', 'explore', 'export'],
  components: { EyeOffIcon, ResourceCard, TableIcon, Tooltip, ClipboardCopyIcon },
  setup (props) {
    const copiedMessage = ref(null)

    return {
      copiedMessage,
    }
  },
  methods: {
    onExportTable (table) {
      this.$emit('export', table)
      this.copiedMessage = '👍'
      setTimeout(() => { this.copiedMessage = null }, 1500)
    }
  }
}
</script>
