<template>
  <div class="modal-card" style="width: auto;">
    <div class="modal-card-head">Load SHACL shapes</div>
    <div class="modal-card-body">
      <form @submit.prevent="onSubmit">
        <b-field :addons="false" :message="error" :type="{ 'is-danger': error }">
          <b-input type="textarea" v-model="data" />
          <p class="help">
            Paste your SHACL shapes in <strong>N3</strong> format in the field above.
          </p>
        </b-field>
        <b-field><button class="button is-primary" type="submit">Load</button></b-field>
      </form>
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
import RDF from 'rdf-ext'
import * as N3 from 'n3'

export default {
  name: 'ModalShacl',
  props: ['load'],

  data () {
    return {
      data: '',
      error: null,
    }
  },

  methods: {
    async onSubmit () {
      if (!this.data) {
        return
      }

      const parser = new N3.Parser()
      try {
        const quads = parser.parse(this.data)
        const dataset = RDF.dataset(quads)
        this.load(dataset)
      } catch (e) {
        this.error = e.toString()
      }
    }
  }
}
</script>
