<template>
  <Tooltip :label="label" type="is-dark" :delay="300" square :triggers="label ? ['hover'] : []">
    <slot />
  </Tooltip>
</template>

<script>
import Tooltip from './Tooltip.vue'

export default {
  name: 'TermTooltip',
  props: ['label'],
  components: { Tooltip },
}
</script>
