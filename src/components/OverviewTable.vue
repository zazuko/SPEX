<template>
  <div class="OverviewTable card is-size-7" :data-id="table.id">
    <header class="card-header has-background-light">
      <h3 class="card-header-title">
        <TermTooltip :label="table.id">
          {{ table.name }}
        </TermTooltip>
      </h3>
      <span class="card-header-icon">
        <b-button type="is-light" size="is-small" icon-left="table" title="Explore" @click="explore" />
      </span>
    </header>
    <table class="card-content table is-fullwidth">
      <tr v-for="(column, index) in table.columns" :key="index" :data-id="table.id + column.id">
        <th>
          <TermTooltip :label="column.id">
            {{ column.name }}
          </TermTooltip>
        </th>
        <td>
          <div v-for="type in column.types" :key="type.id">
            <TermTooltip :label="type.id">
              {{ type.name }}
            </TermTooltip>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.OverviewTable {
  /* margin: 2rem; */
  z-index: 1;
  position: absolute;
  opacity: 0.9;
}

.card-header-title,
.card-header-icon {
  padding: 0.5rem;
}
</style>

<script>
import TermTooltip from './TermTooltip.vue'

export default {
  props: ['table', 'overview'],

  components: { TermTooltip },

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
