<template>
  <b-tooltip :label="label" type="is-dark" size="is-small" :delay="300" square>
    <slot />
  </b-tooltip>
</template>

<script>
export default {
  name: 'TermTooltip',
  props: ['label'],
}
</script>
