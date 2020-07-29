<template>
  <TermTooltip :label="tooltip">
    {{ displayValue }}<small v-if="language" class="has-text-grey">@{{ language }}</small>
  </TermTooltip>
</template>

<script>
import TermTooltip from './TermTooltip.vue'

export default {
  name: 'Term',
  props: ['term', 'endpoint'],

  components: { TermTooltip },

  data () {
    const displayValue = termValue(this.endpoint, this.term)

    return {
      displayValue,
      language: this.term && this.term.language,
      tooltip: this.term.value !== displayValue ? this.term.value : ''
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
