<template>
  <span>
    <b-button v-if="canDescribe" type="is-white" icon-right="eye" @click="show">
      <slot />
    </b-button>
  </span>
</template>

<script>
import { ModalProgrammatic as Modal } from 'buefy'
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
      Modal.open({
        parent: this,
        component: ModalResource,
        props: { uri: this.term.value, endpoint: this.endpoint },
        hasModalCard: true,
      })
    },
  },
}
</script>
