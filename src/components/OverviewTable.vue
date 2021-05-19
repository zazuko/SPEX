<template>
  <div class="absolute border rounded shadow-md bg-white opacity-90 text-sm" :class="{ active: isActive }" :data-id="table.id">
    <header
      class="bg-gray-100 flex items-center justify-between px-3 py-2"
      @mouseenter="$emit('hover-table', table)"
      @mouseleave="$emit('unhover-table', table)"
    >
      <h3 class="font-bold">
        <TermTooltip :label="table.id">
          {{ table.name }}
        </TermTooltip>
      </h3>
      <span class="flex flex-nowrap">
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
        v-for="(property, index) in table.properties"
        :key="index"
        :data-id="table.id + property.id"
        :class="{ active: isPropertyActive(property) }"
        @mouseenter="$emit('hover-property', table, property)"
        @mouseleave="$emit('unhover-property', table, property)"
      >
        <th class="border-b px-3 py-2">
          <TermTooltip :label="property.id">
            {{ property.name }}
          </TermTooltip>
        </th>
        <td class="border-b px-3 py-2">
          <div v-for="value in property.values" :key="value.id">
            <TermTooltip :label="value.id">
              {{ value.name }}
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
      return this.activeLinks.some((link) => link.target === this.table.id)
    }
  },

  methods: {
    isPropertyActive (property) {
      return this.activeLinks.some((link) => (
        link.source === this.table.id &&
        link.sourceProperty === property.id
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
