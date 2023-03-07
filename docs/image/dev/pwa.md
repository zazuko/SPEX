# SPEX is a Progressive Web App (PWA)

## Test the PWA

Both the service worker and manifest file—critical to PWA functionality—are generated during the production build, and not fully functional in the dev environment. 

To get around this, we’ll need to build the site, then serve it.

```zsh
npm run build && npx http-server dist
```

## How the update works

If there is an update you will see it in Chrome DevTools  -> Application. 

There is communication needed between ServiceWorker and the App.

ServiceWorker -> "update event" -> App
App -> "ok - activate the new version" -> ServiceWorker
ServiceWorker -> make the new version active
App gets a 'controller changed' event and reloads the page


- There is a new version `waiting`.  
- The `src/registerServiceWorker.ts` has an `update`function

```typescript 
updated(registration: ServiceWorkerRegistration) {
      console.log('New content is available please refresh.')
      document.dispatchEvent(
        new CustomEvent('swUpdated', { detail: registration })
      )
    }
````

- A custom event `swUpdated` event gets dispatched. With the `ServiceWorkerRegistration` object in the detail payload.

- The App is listening to these Events in `src/App.vue``

```typescript

onMounted(() => {
    // listen to update events
    document.addEventListener('swUpdated', updateAvailable, { once: true })

   ...
})
```

- On a `swUpdated` event we just notify the ServiceWorker to activate the new version. This is the place where you can notify the user about it. But right now we don't do it. We just update.

```typescript 
function refreshApp() {
  // Make sure we only send a 'skip waiting' message if the SW is waiting
  if (registration && registration.waiting) {
    // Send message to SW to skip the waiting and activate the new SW
    registration.waiting.postMessage({ type: 'SKIP_WAITING' })
  }
}
```

- The ServiceWorker gets the message and activates the new version. 

```typescript 
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    (self as any).skipWaiting()
  }
})
```

- After activation the App gets an controller changed event and reloads the page `App.vue``

```typescript

onMounted(() => {
  ...
    // listen to controllerchange events and reload  with the new version ... this is the last step of the update
    navigator.serviceWorker.addEventListener('controllerchange', reloadApp)
})
```