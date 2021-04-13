<template>
  <div class="card is-shadowless overflow-y-auto">
    <div class="card-header has-background-light">
      <h3 class="card-header-title">Classes</h3>
      <p class="card-header-icon py-0 px-1">
        <b-button icon-left="times" type="is-light" @click="$emit('close')"></b-button>
      </p>
    </div>
    <ul class="card-content px-0 py-1">
      <li v-for="table in tables" :key="table.id" class="panel-block is-justify-content-space-between">
        <span>{{ table.name }}</span>
        <b-switch type="is-primary" :value="table.isShown" @input="$emit('toggle-table', table, $event)" />
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
