<template>
  <Tooltip :label="tooltip">
    {{ displayValue }}<small v-if="language" class="has-text-grey">@{{ language }}</small>
  </Tooltip>
</template>

<script>
import Tooltip from './Tooltip.vue'

export default {
  name: 'Term',
  props: ['term', 'endpoint'],

  components: { Tooltip },

  data () {
    const displayValue = termValue(this.endpoint, this.term)
    const expandedValue = expandValue(this.endpoint, this.term)

    return {
      displayValue,
      language: this.term && this.term.language,
      tooltip: expandedValue !== displayValue ? expandedValue : ''
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

function expandValue (endpoint, term) {
  if (term.termType === 'Literal') {
    const datatype = term.datatype ? `^^${endpoint.shrink(term.datatype.value)}` : ''
    const language = term.language ? `@${term.language}` : ''

    return `${term.value}${datatype}${language}`
  }

  return term.value
}
</script>
