<template>
  <HSwitch :modelValue="modelValue" @update:modelValue="$emit('update:modelValue', $event)"
    :class="modelValue ? 'bg-primary-400' : 'bg-gray-300'"
    class="relative inline-flex shrink-0 items-center h-6 w-10 rounded-full shadow-inner">
    <span :class="modelValue ? 'translate-x-5' : 'translate-x-1'"
      class="inline-block w-4 h-4 bg-white rounded-full shadow transition duration-200 ease-in-out" />
  </HSwitch>
</template>

<script>
import { defineComponent } from 'vue'
import { Switch as HSwitch } from '@headlessui/vue'

export default defineComponent({
  name: 'SpexSwitch',
  props: ['modelValue'],
  emits: ['update:modelValue'],
  components: { HSwitch },
})
</script>
