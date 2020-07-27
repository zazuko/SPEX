<template>
  <div class="modal-card" style="width: auto;">
    <div class="modal-card-head">
      <p>Generated SHACL shapes</p>
      <div class="modal-card-actions">
        <b-button size="is-small" icon-left="upload" title="Load SHACL shapes" @click="load"></b-button>
        <b-button size="is-small" icon-left="clipboard" @click="copy">Copy</b-button>
      </div>
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

.modal-card-actions > * {
  margin-right: 0.2rem;
}
</style>

<script>
export default {
  name: 'ModalShacl',
  props: ['shacl', 'loadShacl'],

  computed: {
    pretty () {
      return JSON.stringify(this.shacl, null, 2)
    }
  },

  methods: {
    async copy () {
      await navigator.clipboard.writeText(this.pretty)
      this.$buefy.toast.open('Copied 👍')
    },

    load () {
      this.$parent.close()
      this.loadShacl()
    }
  }
}
</script>
