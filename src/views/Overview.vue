<template>
  <SpexMain :settings="settings" @settings-changed="onSettingsChanged" />
</template>

<script setup lang="ts">
import SpexMain from '../components/Spex.vue'
import { Settings, SettingsPersistance, UrlSettings } from '../model/settings.model'
import { ref } from 'vue'
import { isNavigationFailure, NavigationFailureType, useRouter, useRoute } from 'vue-router'

const appSettings = new SettingsPersistance()

const settings = ref<Settings>(appSettings)
const router = useRouter()
const route = useRoute()

const urlSettings = UrlSettings.createUrlSettingFromQueryParams(route.query)

/** there are 3 possibilities  */
if (urlSettings !== null) {
  /* 1. in the end we always land here: and url with a query param */
  appSettings.mergeSettingsWithUrlSettings(urlSettings)
  settings.value = appSettings
} else if (appSettings.sparqlEndpoint) {
  /* 2. SPEX without query string but with settings from local store.
   * Restore the query string an redirect with query string to land in 1 */
  const newURLSettings = new UrlSettings(appSettings.sparqlEndpoint, appSettings.namedGraph, appSettings.prefixes, appSettings.forceIntrospection)
  updateURL(newURLSettings.toRouterQueryObject())
}

function onSettingsChanged(newSettings: Settings): void {
  const newAppSettings = new SettingsPersistance()
  newAppSettings.sparqlEndpoint = newSettings.sparqlEndpoint
  newAppSettings.username = newSettings.username
  newAppSettings.password = newSettings.password
  newAppSettings.prefixes = newSettings.prefixes
  newAppSettings.namedGraph = newSettings.namedGraph
  newAppSettings.forceIntrospection = newSettings.forceIntrospection
  newAppSettings.storeSettings()
  settings.value = newAppSettings
  const newURLSettings = new UrlSettings(newAppSettings.sparqlEndpoint, newAppSettings.namedGraph, newAppSettings.prefixes, newAppSettings.forceIntrospection)

  updateURL(newURLSettings.toRouterQueryObject())
}

async function updateURL(queryObject: any): Promise<void> {
  try {
    await router.push({ query: queryObject })
  } catch (err) {
    // Ignore duplicated navigation error
    if (!isNavigationFailure(err, NavigationFailureType.duplicated)) {
      throw err
    }
  }
}

</script>

<script lang="ts">

export default {
  name: 'SpexOverview',
}

</script>
