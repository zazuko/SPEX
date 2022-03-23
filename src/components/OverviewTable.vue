<template>
  <ResourceCard :resource="table" :active-links="activeLinks">
    <template v-slot:actions>
      <div class="flex gap-1">
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

<script>
import { EyeOffIcon, TableIcon } from '@heroicons/vue/solid'
import ResourceCard from './ResourceCard.vue'
import Tooltip from './Tooltip.vue'

export default {
  name: 'OverviewTable',
  props: ['table', 'activeLinks'],
  emits: ['hide', 'explore'],
  components: { EyeOffIcon, ResourceCard, TableIcon, Tooltip },
}
</script>
