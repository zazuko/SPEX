<template>
  <span>
    <b-button v-if="canDescribe" type="is-white" size="is-small" icon-right="eye" @click="show">
      <slot />
    </b-button>
  </span>
</template>

<script>
import ModalResource from './ModalResource.vue'

export default {
  name: 'TermDescribe',
  props: ['term', 'endpoint'],

  computed: {
    canDescribe () {
      return this.term.termType === 'NamedNode'
    }
  },

  methods: {
    show () {
      this.$buefy.modal.open({
        parent: this,
        component: ModalResource,
        props: { uri: this.term.value, endpoint: this.endpoint },
        hasModalCard: true,
      })
    },
  },
}
</script>
