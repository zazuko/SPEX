<template>
  <span :title="term.value">
    {{ displayValue }}<small v-if="language" class="has-text-grey">@{{ language }}</small>
  </span>
</template>

<script>
import { shrinkURI } from '@/fetch-tables'

export default {
  props: ['term'],

  data () {
    return {
      displayValue: termValue(this.term),
      language: this.term && this.term.language
    }
  }
}

function termValue (term) {
  if (!term) {
    return term
  }

  if (term.termType === 'NamedNode') {
    return shrinkURI(term.value)
  }

  return term.value
}
</script>
