<template>
  <Listbox as="div" class="control" :modelValue="modelValue" @update:modelValue="$emit('update:modelValue', $event)">
    <ListboxButton as="div" class="relative">
      <input
        :id="id"
        placeholder="DEFAULT"
        class="input"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        autocomplete="off"
      />
      <loading-spinner v-show="loading" class="absolute top-2 right-2" />
    </ListboxButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <ListboxOptions as="ul" class="bg-white border border-gray-100 shadow-md absolute w-full z-10 max-h-64 overflow-y-scroll">
        <ListboxOption
          as="template"
          v-for="graph in graphs"
          :key="graph"
          :value="graph"
          v-slot="{ active, selected }"
        >
          <li
            class="px-2 py-2"
            :class="{
              'bg-gray-100': active,
              'bg-primary-300': selected,
            }"
          >{{ graph }}</li>
        </ListboxOption>
        <li v-if="hasMoreGraphs">
          <button
            type="button"
            class="button is-white justify-start w-full"
            :class="{ 'is-loading': loading }"
            @click="$emit('fetch-more')"
          >
            <RefreshIcon class="icon" />
            <span>Load more</span>
          </button>
        </li>
      </ListboxOptions>
    </transition>
  </Listbox>
</template>

<script>
import { defineComponent } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { RefreshIcon } from '@heroicons/vue/solid'
import LoadingSpinner from './LoadingSpinner.vue'

export default defineComponent({
  name: 'SelectGraph',
  props: ['id', 'modelValue', 'graphs', 'loading', 'hasMoreGraphs'],
  emits: ['update:modelValue', 'fetch-more'],
  components: { Listbox, ListboxButton, ListboxOptions, ListboxOption, LoadingSpinner, RefreshIcon },
})
</script>
