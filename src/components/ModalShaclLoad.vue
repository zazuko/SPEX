<template>
  <Dialog @close="$emit('close')">
    <div class="modal-card-head flex justify-between py-4">
      <h3>Load SHACL shapes</h3>
      <button class="button is-light" title="Close" @click="$emit('close')">
        <XIcon class="icon" />
      </button>
    </div>
    <div class="modal-card-body">
      <form @submit.prevent="onSubmit">
        <div class="field">
          <textarea type="textarea" class="textarea" v-model="data" :class="{ 'is-danger': error }" />
          <p class="help is-danger" v-if="error">
            {{ error }}
          </p>
          <p class="help">
            Paste your SHACL shapes in <strong>N3</strong> format in the field above.
          </p>
        </div>
        <div class="field">
          <button class="button is-primary" type="submit">Load</button>
        </div>
      </form>
    </div>
  </Dialog>
</template>

<script>
import RDF from '@rdfjs/dataset'
import * as N3 from 'n3'
import Dialog from './Dialog.vue'
import XIcon from './icons/XIcon.vue'

export default {
  name: 'ModalShaclLoad',
  props: ['load'],
  emits: ['close'],
  components: { Dialog, XIcon },

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
