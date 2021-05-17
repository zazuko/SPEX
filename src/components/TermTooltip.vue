<template>
  <b-tooltip :label="label" type="is-dark" :delay="300" square :triggers="label ? ['hover'] : []">
    <slot />
  </b-tooltip>
</template>

<script>
export default {
  name: 'TermTooltip',
  props: ['label'],
}
</script>
