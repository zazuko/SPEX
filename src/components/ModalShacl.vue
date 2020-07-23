<template>
  <div class="modal-card" style="width: auto;">
    <div class="modal-card-head">
      <p>Generated SHACL shapes</p>
      <b-button size="is-small" icon-left="clipboard" @click="copy">Copy</b-button>
    </div>
    <div class="modal-card-body">
      <pre>
{{ pretty }}
      </pre>
    </div>
  </div>
</template>

<style scoped>
.modal-card-head {
  display: flex;
  justify-content: space-between;
}
</style>

<script>
export default {
  name: 'ModalShacl',
  props: ['shacl'],

  computed: {
    pretty () {
      return JSON.stringify(this.shacl, null, 2)
    }
  },

  methods: {
    async copy () {
      await navigator.clipboard.writeText(this.pretty)
      this.$buefy.toast.open('Copied 👍')
    }
  }
}
</script>
