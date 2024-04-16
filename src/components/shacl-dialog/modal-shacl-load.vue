<template>
  <SpexDialog @close="$emit('close')">
    <div class="modal-card-head py-4">
      <h3 style="color: grey">Load SHACL shapes</h3>
      <div class="ml-auto">
        <button class="button is-light" title="Close" @click="$emit('close')">
          <XMarkIcon class="icon" />
        </button>
      </div>
    </div>
    <div class="modal-card-body">
      <form @submit.prevent="onSubmit">
        <div class="field">
          <textarea type="textarea" class="textarea" v-model="data" :class="{ 'is-danger': error }" />
          <p class="help is-danger" v-if="error">
            {{ error }}
          </p>
          <p class="help" style="color: grey">
            Paste your SHACL shapes in <strong>Turtle</strong> format in the field above.
          </p>
        </div>
        <div class="field">
          <button class="button is-primary" type="submit">Load</button>
        </div>
      </form>
    </div>
  </SpexDialog>
</template>

<script>
import { Readable } from 'stream'
import { XMarkIcon } from '@heroicons/vue/24/solid'
import rdfEnvironment from '@zazuko/env/web'
import { rdf, spex } from '../../namespace'
import SpexDialog from './dialog.vue'

export default {
  name: 'ModalShaclLoad',
  props: ['load', 'endpoint'],
  emits: ['close'],
  components: { SpexDialog, XMarkIcon },

  data() {
    return {
      data: '',
      error: null,
    }
  },

  methods: {
    async onSubmit() {
      if (!this.data) {
        return
      }

      try {
        const quads = rdfEnvironment.formast.parsers.import('text/turtle', Readable.from(this.data))
        const dataset = await rdfEnvironment.dataset().import(quads)
        const pointer = rdfEnvironment.clownface({ dataset, term: spex.DefaultShapes })
          .in(rdf.type)
          .in(spex.shape)

        if (!pointer.term) {
          throw new Error('No node with spex:shape pointing to a spex:DefaultShapes found')
        }

        const datamodel = this.endpoint.dataModelFromSHACL(pointer)
        this.load(datamodel)
        this.$emit('close')
      } catch (e) {
        this.error = e.toString()
      }
    }
  }
}
</script>
