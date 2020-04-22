<template>
  <span :title="term.value">
    {{ displayValue }}
  </span>
</template>

<script>
import { shrinkURI } from '@/fetch-tables'

export default {
  props: ['term'],

  data () {
    return {
      displayValue: termValue(this.term)
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
