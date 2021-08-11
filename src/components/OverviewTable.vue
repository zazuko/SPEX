<template>
  <ResourceCard :resource="table" :active-links="activeLinks">
    <template v-slot:actions>
      <Tooltip label="Hide">
        <button class="button is-light" @click="$emit('hide', table)">
          <EyeOffIcon class="icon" />
        </button>
      </Tooltip>
      <Tooltip label="Explore">
        <button class="button is-light" @click="$emit('explore', table)">
          <TableIcon class="icon" />
        </button>
      </Tooltip>
    </template>
  </ResourceCard>
</template>

<script>
import ResourceCard from './ResourceCard.vue'
import EyeOffIcon from './icons/EyeOffIcon.vue'
import TableIcon from './icons/TableIcon.vue'
import Tooltip from './Tooltip.vue'

export default {
  name: 'OverviewTable',
  props: ['table', 'activeLinks'],
  components: { EyeOffIcon, ResourceCard, TableIcon, Tooltip },
}
</script>
