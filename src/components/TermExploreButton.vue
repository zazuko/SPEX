<template>
  <Tooltip v-if="canExplore" label="Explore">
    <button class="button is-white is-small" @click="$emit('explore-resource', resource)">
      <EyeIcon class="icon" />
    </button>
  </Tooltip>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Tooltip from './common/tooltip.vue'
import { EyeIcon } from '@heroicons/vue/24/solid'
import { Resource } from '../model/resource.model'

interface Props {
  term: any // should be Term
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const props = defineProps<Props>()

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const emit = defineEmits<{
  (event: 'explore-resource'): void
}>()

const canExplore = computed(() => {
  return ['NamedNode', 'BlankNode'].includes(props.term.termType)
})
const resource = computed(() => {
  const newResource: Resource = { id: props.term.value, name: props.term.value, term: props.term }
  return newResource
}
)
</script>

<script lang="ts">
export default {
  name: 'TermExploreButton'
}
</script>
