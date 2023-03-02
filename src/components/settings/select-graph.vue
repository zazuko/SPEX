<template>
  <Listbox as="div" class="control" :modelValue="modelValue" @update:modelValue="$emit('update:modelValue', $event)">
    <ListboxButton as="div" class="relative">
      <input :id="id" placeholder="DEFAULT" class="input" :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" autocomplete="off" />
      <loading-spinner v-show="loading" class="absolute top-2 right-2" />
    </ListboxButton>
    <transition enter-active-class="transition duration-100 ease-out" enter-from-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100" leave-active-class="transition duration-75 ease-out"
      leave-from-class="scale-100 opacity-100" leave-to-class="scale-95 opacity-0">
      <ListboxOptions as="ul"
        class="bg-white border border-gray-100 shadow-md absolute w-full z-10 max-h-64 overflow-y-scroll">
        <ListboxOption as="template" v-for="graph in graphs" :key="graph" :value="graph" v-slot="{ active, selected }">
          <li class="px-2 py-2" :class="{
            'bg-gray-100': active,
            'bg-primary-300': selected,
          }">{{ graph }}</li>
        </ListboxOption>
        <li v-if="hasMoreGraphs">
          <button type="button" class="button is-light justify-start w-full" :class="{ 'is-loading': loading }"
            @click="$emit('fetch-more')">
            <ArrowPathIcon class="icon" />
            <span>Load more</span>
          </button>
        </li>
      </ListboxOptions>
    </transition>
  </Listbox>
</template>

<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { ArrowPathIcon } from '@heroicons/vue/24/solid'
import LoadingSpinner from '../common/loading-spinner.vue'

interface Props {
  id: string,
  modelValue: any,
  graphs: string[],
  loading: boolean,
  hasMoreGraphs: boolean
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const props = defineProps<Props>()

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
  (event: 'fetch-more'): void
}>()

</script>

<script lang="ts">

export default {
  name: 'SelectGraph'
}
</script>
