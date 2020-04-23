<template>
  <b-tooltip :label="label" type="is-dark" size="is-small" :delay="200" square>
    <slot />
  </b-tooltip>
</template>

<script>
export default {
  props: ['label']
}
</script>
