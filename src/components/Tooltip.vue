<template>
  <span :title="label">
    <slot />
  </span>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Tooltip',
  props: ['label'],
})
</script>
