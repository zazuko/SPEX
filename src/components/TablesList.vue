<template>
  <div class="panel">
    <div class="panel-heading px-4">
      <h3 class="title is-6">Classes</h3>
    </div>
    <ul class="panel">
      <li v-for="table in tables" :key="table.id" class="px-4 panel-block is-justify-content-space-between">
        <span>{{ table.name }}</span>
        <b-switch type="is-primary" size="is-small" :value="table.isShown" @input="$emit('toggle-table', table, $event)" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TablesList',
  props: ['tables'],
}
</script>

<style scoped>
.panel {
  box-shadow: none;
}
</style>
