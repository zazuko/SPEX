<template>
  <div class="card is-shadowless overflow-y-auto">
    <div class="card-header has-background-light">
      <h3 class="card-header-title">Classes</h3>
      <p class="card-header-icon py-0 px-1">
        <button class="button is-light" @click="$emit('close')">
          <XMarkIcon class="icon" />
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
          <span style="flex-grow:0; overflow-x: clip; text-overflow:ellipsis">All</span>
          <SpexSwitch :modelValue="toggleAll" @update:modelValue="onToggleAll" />
        </li>
        <li v-for="table in datamodel.tables" :key="table.id" class="panel-block is-justify-content-space-between">
          <span style="flex-grow:0; overflow-x: clip; text-overflow:ellipsis">{{ table.name }}</span>
          <SpexSwitch :modelValue="table.isShown" @update:modelValue="$emit('toggle-table', table, $event)" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DataModel } from '@/model/data-model.model'
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'
import SpexSwitch from './common/switch.vue'

interface Props {
  datamodel: DataModel
}
const props = defineProps<Props>()

const toggleAll = ref<boolean>(true)

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const emit = defineEmits<{
  (event: 'toggle-table', boolean): void;
  (event: 'select-viewport', value: any): void,
  (event: 'close'): void
}>()
const selectViewport = (event) => {
  const id = event.target.value
  const viewport =
    props.datamodel.viewports.find((viewport) => viewport.id === id) ?? null
  emit('select-viewport', viewport)
}

const onToggleAll = (event: boolean) => {
  toggleAll.value = event
  props.datamodel.tables.forEach((table) => {
    table.isShown = event
  })
}

</script>

<script lang="ts">

export default {
  name: 'TablesList'
}

</script>
