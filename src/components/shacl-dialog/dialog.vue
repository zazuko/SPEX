<template>
  <HDialog :open="open" @close="$emit('close')" class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen">
      <DialogOverlay class="fixed inset-0 bg-black opacity-50" />

      <div class="modal-card">
        <slot />
      </div>
    </div>
  </HDialog>
</template>

<script setup lang="ts">
import { Dialog as HDialog, DialogOverlay } from '@headlessui/vue'

interface Props {
  open?: boolean
}
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const props = defineProps<Props>()

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const emit = defineEmits<{
  (event: 'close'): void;
}>()
</script>

<script lang="ts">

export default {
  name: 'SpexDialog',
}
</script>
