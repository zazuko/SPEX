<template>
  <div class="OverviewTable card">
    <header class="card-header has-background-light">
      <h3 class="card-header-title">
        <span class="connector" :data-id="table.id"></span>
        <b-tooltip :label="table.id">
          {{ table.name }}
        </b-tooltip>
      </h3>
    </header>
    <table class="card-content table">
      <tr v-for="column in table.columns" :key="column.id">
        <th>
          <b-tooltip :label="column.id">
            {{ column.name }}
          </b-tooltip>
        </th>
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
