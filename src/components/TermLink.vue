<template>
  <a :href="uri" target="_blank" rel="noopener noreferrer" class="flex items-baseline gap-2 term-link">
    <span><slot /></span>
    <b-icon icon="external-link-alt" class="invisible w-3 term-link-icon" />
  </a>
</template>

<style scoped>
.term-link:hover .term-link-icon,
.term-link:focus .term-link-icon {
  visibility: visible;
}
</style>

<script>
export default {
  name: 'TermLink',
  props: ['uri'],
}
</script>
