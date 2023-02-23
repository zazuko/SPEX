<template>
  <HSwitch :modelValue="modelValue" @update:modelValue="$emit('update:modelValue', $event)"
    :class="modelValue ? 'bg-primary-400' : 'bg-gray-300'"
    class="relative inline-flex shrink-0 items-center h-6 w-10 rounded-full shadow-inner">
    <span :class="modelValue ? 'translate-x-5' : 'translate-x-1'"
      class="inline-block w-4 h-4 bg-white rounded-full shadow transition duration-200 ease-in-out" />
  </HSwitch>
</template>

<script setup lang="ts">
import { Switch as HSwitch } from '@headlessui/vue'

interface Props {
  modelValue: any
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const props = defineProps<Props>()

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const emit = defineEmits<{
  (event: 'update:modelValue', boolean): void;
}>()

</script>

<script lang="ts">

export default {
  name: 'SpexSwitch'
}

</script>
