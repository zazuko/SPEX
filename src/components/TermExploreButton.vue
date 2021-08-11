<template>
  <Tooltip v-if="canExplore" label="Explore">
    <button class="button is-white is-small" @click="$emit('explore-resource', resource)">
      <EyeIcon class="icon" />
    </button>
  </Tooltip>
</template>

<script>
import { EyeIcon } from '@heroicons/vue/solid'
import Tooltip from './Tooltip.vue'

export default {
  name: 'TermExploreButton',
  props: ['term', 'endpoint'],
  components: { EyeIcon, Tooltip },

  computed: {
    canExplore () {
      return ['NamedNode', 'BlankNode'].includes(this.term.termType)
    },

    resource () {
      return { id: this.term.value, name: this.term.value, term: this.term }
    },
  }
}
</script>
