<template>
  <ResourceCard :resource="table" :active-links="activeLinks" v-on="$listeners">
    <template v-slot:actions>
      <b-tooltip label="Hide">
        <b-button type="is-light" icon-left="eye-slash" @click="$emit('hide', table)" />
      </b-tooltip>
      <b-tooltip label="Explore">
        <b-button type="is-light" icon-left="table" @click="$emit('explore', table)" />
      </b-tooltip>
    </template>
  </ResourceCard>
</template>

<script>
import ResourceCard from './ResourceCard.vue'

export default {
  name: 'OverviewTable',
  props: ['table', 'activeLinks'],
  components: { ResourceCard },
}
</script>
