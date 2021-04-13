<template>
  <b-tooltip :label="label" type="is-dark" :delay="300" square>
    <slot />
  </b-tooltip>
</template>

<script>
export default {
  name: 'TermTooltip',
  props: ['label'],
}
</script>
