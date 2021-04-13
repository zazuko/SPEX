<template>
  <a :href="uri" target="_blank" rel="noopener noreferrer" class="term-link">
    <slot />
    <b-icon icon="external-link-alt" class="term-link-icon" />
  </a>
</template>

<style scoped>
.term-link-icon {
  visibility: hidden;
  margin-left: 0.2em;
}

.term-link:hover .term-link-icon,
.term-link:focus .term-link-icon {
  visibility: visible;
}
</style>

<style>
.icon.term-link-icon > svg {
  height: 0.8em;
}
</style>

<script>
export default {
  name: 'TermLink',
  props: ['uri'],
}
</script>
