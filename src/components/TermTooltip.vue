<template>
  <b-tooltip :label="label" type="is-dark" size="is-small" square>
    <slot />
  </b-tooltip>
</template>

<script>
export default {
  name: 'TermTooltip',
  props: ['label'],
}
</script>
