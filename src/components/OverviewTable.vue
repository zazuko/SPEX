<template>
  <ResourceCard :resource="table" :active-links="activeLinks">
    <template v-slot:actions>
      <b-tooltip label="Hide">
        <button class="button is-light" @click="$emit('hide', table)">
          <EyeOffIcon class="icon" />
        </button>
      </b-tooltip>
      <b-tooltip label="Explore">
        <button class="button is-light" @click="$emit('explore', table)">
          <TableIcon class="icon" />
        </button>
      </b-tooltip>
    </template>
  </ResourceCard>
</template>

<script>
import ResourceCard from './ResourceCard.vue'
import EyeOffIcon from './icons/EyeOffIcon.vue'
import TableIcon from './icons/TableIcon.vue'

export default {
  name: 'OverviewTable',
  props: ['table', 'activeLinks'],
  components: { EyeOffIcon, ResourceCard, TableIcon },
}
</script>
