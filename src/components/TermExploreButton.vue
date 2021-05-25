<template>
  <b-tooltip v-if="canExplore" label="Explore">
    <b-button
      icon-left="eye"
      type="is-white"
      @click="$emit('explore-resource', resource)"
    />
  </b-tooltip>
</template>

<script>
export default {
  name: 'TermExploreButton',
  props: ['term', 'endpoint'],

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
