<template>
  <Tooltip :label="tooltip">
    {{ displayValue }}<small v-if="language" class="has-text-grey">@{{ language }}</small>
  </Tooltip>
</template>

<script setup lang="ts">
import { Endpoint } from '../endpoint'
import type { Term } from '@rdfjs/types'
import { ref } from 'vue'
import Tooltip from './common/tooltip.vue'

interface Props {
  term: Term, // should be Term
}
const props = defineProps<Props>()

const endpoint = Endpoint.getInstance()

const displayValue = ref(termValue(endpoint, props.term))
const expandedValue = expandValue(endpoint, props.term)
const language = ref<string>(props.term && (props.term as any).language)
const tooltip = ref<string>(expandedValue !== displayValue.value ? expandedValue : '')

function termValue(endpoint: Endpoint, term: Term): string {
  if (!term) {
    return term
  }
  if (term.termType === 'NamedNode') {
    return endpoint.shrink(term.value)
  }
  return term.value
}

function expandValue(endpoint: Endpoint, term: Term): string {
  if (term.termType === 'Literal') {
    const datatype = term.datatype ? `^^${endpoint.shrink(term.datatype.value)}` : ''
    const language = term.language ? `@${term.language}` : ''
    return `${term.value}${datatype}${language}`
  }
  return term.value
}
</script>

<script lang="ts">
export default {
  name: 'SpexTerm'
}

</script>
