<template>
  <div id="app" class="h-full flex flex-col">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

let registration: ServiceWorkerRegistration | null = null

function updateAvailable(event: any) {
  registration = event.detail
  refreshApp()
}

function refreshApp() {
  // Make sure we only send a 'skip waiting' message if the SW is waiting
  if (registration && registration.waiting) {
    // Send message to SW to skip the waiting and activate the new SW
    registration.waiting.postMessage({ type: 'SKIP_WAITING' })
  }
}

function reloadApp() {
  window.location.reload()
}

onMounted(() => {
  document.addEventListener('swUpdated', updateAvailable, { once: true })
  navigator.serviceWorker.addEventListener('controllerchange', reloadApp)
})

onBeforeUnmount(() => {
  document.addEventListener('swUpdated', updateAvailable)
  navigator.serviceWorker.removeEventListener('controllerchange', reloadApp)
})
</script>
