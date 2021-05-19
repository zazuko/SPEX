<template>
  <div class="absolute border rounded shadow-md bg-white opacity-90 text-sm" :class="{ active: isActive }" :data-id="resource.id">
    <header
      class="bg-gray-100 flex items-center gap-4 justify-between px-3 py-2"
      @mouseenter="$emit('hover-title', resource)"
      @mouseleave="$emit('unhover-title', resource)"
    >
      <h3 class="font-bold">
        <TermTooltip :label="resource.id">
          {{ resource.name }}
        </TermTooltip>
      </h3>
      <span class="flex flex-nowrap">
        <slot name="actions" />
      </span>
    </header>
    <table class="w-full">
      <tr
        v-for="(property, index) in resource.properties"
        :key="index"
        :data-id="resource.id + property.id"
        :class="{ active: isPropertyActive(property) }"
        @mouseenter="$emit('hover-property', resource, property)"
        @mouseleave="$emit('unhover-property', resource, property)"
      >
        <th class="border-b px-3 py-2">
          <TermTooltip :label="property.id">
            {{ property.name }}
          </TermTooltip>
        </th>
        <td class="border-b px-3 py-2">
          <div v-for="value in property.values" :key="value.id">
            <slot name="property-value" :value="value">
              <TermTooltip :label="value.id">
                {{ value.name }}
              </TermTooltip>
            </slot>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import TermTooltip from './TermTooltip.vue'

export default {
  name: 'ResourceCard',
  props: [
    'resource',
    'activeLinks',
  ],

  components: { TermTooltip },

  data () {
    return {}
  },

  computed: {
    isActive () {
      return this.activeLinks.some((link) => link.target === this.resource.id)
    }
  },

  methods: {
    isPropertyActive (property) {
      return this.activeLinks.some((link) => (
        link.source === this.resource.id &&
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
