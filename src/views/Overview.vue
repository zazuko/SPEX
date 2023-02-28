<template>
  <SpexMain :settings="settings" @settings-change="onSettingsChange" />
</template>

<script setup lang="ts">
import SpexMain from '@/components/Spex.vue'
import { Settings, SettingsPersistance, UrlSettings } from '@/model/settings.model'
import { ref } from 'vue'
import { isNavigationFailure, NavigationFailureType, useRouter, useRoute, LocationQuery, LocationQueryValue } from 'vue-router'

const appSettings = new SettingsPersistance()

const settings = ref<SettingsPersistance | null>(null)
const router = useRouter()
const route = useRoute()

const urlSettings = UrlSettings.createUrlSettingFromQueryParams(route.query)

/** there are 3 possibilities  */
if (urlSettings !== null) {
  /* 1. in the end we always land here: and url with a query param */
  console.log('we have an url param', urlSettings.sparqlEndpoint)
  appSettings.mergeSettingsWithUrlSettings(urlSettings)
  settings.value = appSettings
} else if (appSettings.sparqlEndpoint) {
  /* 2. SPEX without query string but with settings from local store.
   * Restore the query string an redirect with query string to land in 1 */
  console.log('from local store', appSettings.sparqlEndpoint)
  const newURLSettings = new UrlSettings(appSettings.sparqlEndpoint, appSettings.namedGraph, appSettings.prefixes, appSettings.forceIntrospection)
  updateURL(newURLSettings.toRouterQueryObject())
} else {
  /* no configuration available: SPEX ask for it */
  console.log('no config')

  settings.value = null
}

function onSettingsChange(newSettings: Settings): void {
  // settings.value = newSettings
  //  saveSettingsInLocalStorage(newSettings)
  // updateURL(newSettings)
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
