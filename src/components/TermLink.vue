<template>
  <a :href="uri" target="_blank" rel="noopener noreferrer" class="term-link">
    <span class="level">
      <span class="level-left">
        <slot />
        <b-icon icon="external-link-alt" class="term-link-icon" />
      </span>
    </span>
  </a>
</template>

<style scoped>
.term-link-icon {
  font-size: 0.6rem;
  margin-right: 0.1rem;
}
</style>

<script>
export default {
  name: 'TermLink',
  props: ['uri'],
}
</script>
