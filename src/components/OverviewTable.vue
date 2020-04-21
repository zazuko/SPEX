<template>
  <div class="OverviewTable card">
    <header class="card-header">
      <h3 class="card-header-title">
        <span class="connector" :data-id="table.id"></span>
        {{ table.name }}
      </h3>
    </header>
    <table class="card-content table">
      <tr v-for="column in table.columns" :key="column.id">
        <th>{{ column.name }}</th>
        <td>{{ column.datatype }}</td>
        <td><span class="connector" :data-id="column.id"></span></td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.OverviewTable {
  margin: 1em;
}
</style>

<script>

export default {
  props: ['table', 'overview'],
  data () {
    return {}
  }
}
</script>
