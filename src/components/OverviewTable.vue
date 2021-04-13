<template>
  <div class="OverviewTable card" :class="{ active: isActive }" :data-id="table.id">
    <header
      class="card-header has-background-light"
      @mouseenter="$emit('hover-table', table)"
      @mouseleave="$emit('unhover-table', table)"
    >
      <h3 class="card-header-title">
        <TermTooltip :label="table.id">
          {{ table.name }}
        </TermTooltip>
      </h3>
      <span class="card-header-icon">
        <b-tooltip label="Hide">
          <b-button type="is-light" icon-left="eye-slash" @click="$emit('hide', table)" />
        </b-tooltip>
        <b-tooltip label="Explore">
          <b-button type="is-light" icon-left="table" @click="$emit('explore', table)" />
        </b-tooltip>
      </span>
    </header>
    <table class="card-content table is-fullwidth">
      <tr
        v-for="(column, index) in table.columns"
        :key="index"
        :data-id="table.id + column.id"
        :class="{ active: isColumnActive(column) }"
        @mouseenter="$emit('hover-column', table, column)"
        @mouseleave="$emit('unhover-column', table, column)"
      >
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

<script>
import TermTooltip from './TermTooltip.vue'

export default {
  name: 'OverviewTable',
  props: ['table', 'overview', 'activeLinks'],

  components: { TermTooltip },

  data () {
    return {}
  },

  computed: {
    isActive () {
      return this.activeLinks.some((link) => link.target.id === this.table.id)
    }
  },

  methods: {
    isColumnActive (column) {
      return this.activeLinks.some((link) => (
        link.source.id === this.table.id &&
        link.sourceColumn === column.id
      ))
    }
  }
}
</script>

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

.active {
  border: 2px solid #ffb15e;
}
</style>
