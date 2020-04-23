<template>
  <span :title="term.value">
    {{ displayValue }}<small v-if="language" class="has-text-grey">@{{ language }}</small>
  </span>
</template>

<script>
export default {
  props: ['term', 'endpoint'],

  data () {
    const displayValue = termValue(this.endpoint, this.term)

    return {
      displayValue,
      language: this.term && this.term.language,
    }
  }
}

function termValue (endpoint, term) {
  if (!term) {
    return term
  }

  if (term.termType === 'NamedNode') {
    return endpoint.shrink(term.value)
  }

  return term.value
}
</script>
