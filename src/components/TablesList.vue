<template>
  <div class="card is-shadowless overflow-y-auto">
    <div class="card-header has-background-light">
      <h3 class="card-header-title">Classes</h3>
      <p class="card-header-icon py-0 px-1">
        <button class="button is-light" @click="$emit('close')">
          <XIcon class="icon" />
        </button>
      </p>
    </div>
    <div class="card-content px-0 py-1">
      <div v-show="datamodel.viewports.length > 0" class="
          field
          m-0
          px-2
          py-2
          border-b
          flex flex-wrap
          justify-end
          items-center
          gap-2
        ">
        <label class="label m-0" for="predefined-views">Predefined views</label>
        <div class="select">
          <select id="predefined-views" @input="selectViewport">
            <option value="">-</option>
            <option v-for="viewport in datamodel.viewports" :key="viewport.id" :value="viewport.id">
              {{ viewport.name }}
            </option>
          </select>
        </div>
      </div>
      <ul>
        <li class="panel-block is-justify-content-space-between">
          <span>All</span>
          <SpexSwitch :modelValue="toggleAll" @update:modelValue="onToggleAll" />
        </li>
        <li v-for="table in datamodel.tables" :key="table.id" class="panel-block is-justify-content-space-between">
          <span>{{ table.name }}</span>
          <SpexSwitch :modelValue="table.isShown" @update:modelValue="$emit('toggle-table', table, $event)" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { XIcon } from '@heroicons/vue/solid'
import SpexSwitch from './Switch.vue'

export default {
  name: 'TablesList',
  props: ['datamodel'],
  emits: ['toggle-table', 'select-viewport', 'close'],
  components: { SpexSwitch, XIcon },
  data: () => {
    return { toggleAll: true }
  },

  methods: {
    selectViewport(event) {
      const id = event.target.value
      const viewport =
        this.datamodel.viewports.find((viewport) => viewport.id === id) ?? null

      this.$emit('select-viewport', viewport)
    },

    onToggleAll(event) {
      this.toggleAll = event
      this.datamodel.tables.forEach((table) => {
        table.isShown = event
      })
    }
  }
}
</script>
