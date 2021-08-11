<template>
  <HDialog :open="open" @close="$emit('close')" class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen">
      <DialogOverlay  class="fixed inset-0 bg-black opacity-50" />

      <div class="modal-card">
        <slot />
      </div>
    </div>
  </HDialog>
</template>

<script>
import { defineComponent } from 'vue'
import { Dialog as HDialog, DialogOverlay } from '@headlessui/vue'

export default defineComponent({
  name: 'Dialog',
  props: ['open'],
  emits: ['close'],
  components: { DialogOverlay, HDialog },
})
</script>
