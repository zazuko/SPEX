<template>
  <div class="OverviewTable card is-size-7" :data-id="table.id">
    <header class="card-header has-background-light">
      <h3 class="card-header-title">
        <b-tooltip :label="table.id">
          {{ table.name }}
        </b-tooltip>
      </h3>
      <span class="card-header-icon">
        <b-button type="is-light" size="is-small" icon-left="table" title="Explore" @click="explore" />
      </span>
    </header>
    <table class="card-content table">
      <tr v-for="(column, index) in table.columns" :key="index">
        <th>
          <b-tooltip :label="column.id">
            {{ column.name }}
          </b-tooltip>
        </th>
        <td>
          <b-tooltip :label="column.type.id">
            {{ column.type.name }}
          </b-tooltip>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.OverviewTable {
  margin: 2rem;
  z-index: 1;
}

.card-header-title,
.card-header-icon {
  padding: 0.5rem;
}
</style>

<script>
export default {
  props: ['table', 'overview'],

  data () {
    return {}
  },

  methods: {
    explore () {
      this.$emit('explore', this.table)
    }
  }
}
</script>
