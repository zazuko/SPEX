<template>
  <div class="absolute border rounded shadow-md bg-white opacity-90" :class="{ active: isActive }" :data-id="table.id">
    <header
      class="bg-gray-100 flex items-center justify-between px-4 py-2"
      @mouseenter="$emit('hover-table', table)"
      @mouseleave="$emit('unhover-table', table)"
    >
      <h3 class="font-bold">
        <TermTooltip :label="table.id">
          {{ table.name }}
        </TermTooltip>
      </h3>
      <span>
        <b-tooltip label="Hide">
          <b-button type="is-light" icon-left="eye-slash" @click="$emit('hide', table)" />
        </b-tooltip>
        <b-tooltip label="Explore">
          <b-button type="is-light" icon-left="table" @click="$emit('explore', table)" />
        </b-tooltip>
      </span>
    </header>
    <table class="w-full">
      <tr
        v-for="(column, index) in table.columns"
        :key="index"
        :data-id="table.id + column.id"
        :class="{ active: isColumnActive(column) }"
        @mouseenter="$emit('hover-column', table, column)"
        @mouseleave="$emit('unhover-column', table, column)"
      >
        <th class="border-b px-4 py-2">
          <TermTooltip :label="column.id">
            {{ column.name }}
          </TermTooltip>
        </th>
        <td class="border-b px-4 py-2">
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
.active {
  border: 2px solid #ffb15e;
}
</style>
