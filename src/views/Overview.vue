<template>
  <SpexMain :settings="settings" @settings-change="onSettingsChange" />
</template>

<script setup lang="ts">
import SpexMain from '@/components/Spex.vue'
import { Settings } from '@/model/settings.model'
import { ref } from 'vue'
import { isNavigationFailure, NavigationFailureType, useRouter, useRoute, LocationQuery, LocationQueryValue } from 'vue-router'

const defaultSettings: Settings = {
  url: '',
  user: null,
  password: null,
  graph: null,
  prefixes: [],
  forceIntrospection: false
}
const settings = ref<Settings>(defaultSettings)
const router = useRouter()
const route = useRoute()

const validURLOptions = ['url', 'graph', 'prefixes', 'forceIntrospection']

const urlSettings = settingsFromURL(route.query)
const localSettings = settingsFromLocalStorage()

if (urlSettings.url) {
  settings.value = { ...defaultSettings, ...urlSettings }
} else if (localSettings?.url) {
  settings.value = { ...defaultSettings, ...localSettings }
}

// Since we don't put user/password in the URL, get them from localStorage if the endpoint URL is the same
if (localSettings?.url && urlSettings?.url && localSettings?.url === urlSettings?.url) {
  settings.value.user = localSettings.user
  settings.value.password = localSettings.password
}

function onSettingsChange(newSettings: Settings): void {
  settings.value = newSettings
  saveSettingsInLocalStorage(newSettings)
  updateURL(newSettings)
}

async function updateURL(settings: Settings): Promise<void> {
  const query = urlQueryFromSettings(settings)
  console.log('query param', query)
  try {
    await router.push({ query })
  } catch (err) {
    // Ignore duplicated navigation error
    if (!isNavigationFailure(err, NavigationFailureType.duplicated)) {
      throw err
    }
  }
}

function settingsFromLocalStorage(): Settings | null {
  const settingsString = localStorage.getItem('settings')
  if (!settingsString) {
    return null
  }
  const settingsObject = JSON.parse(settingsString)
  if (!settingsObject) {
    return null
  }
  return settingsObject as Settings
}

function saveSettingsInLocalStorage(settings: Settings): void {
  localStorage.setItem('settings', JSON.stringify(settings))
}

function settingsFromURL(params: LocationQuery): Settings {
  const initialSettings: Settings = {
    url: '',
    user: null,
    password: null,
    graph: null,
    prefixes: [],
    forceIntrospection: false
  }
  const urlSettings = validURLOptions.reduce((accSettings, option) => {
    if (option in params) {
      accSettings[option] = deserializeURLParam(option, params[option])
    }
    return accSettings
  }, initialSettings)

  return urlSettings
}

function deserializeURLParam(param: string, value: LocationQueryValue | LocationQueryValue[]) {
  const values: string[] = []
  if (param === 'prefixes') {
    if (typeof value === 'string') {
      values.push(value)
    }

    return values.map((prefixValue) => {
      const prefix = prefixValue.split(':')[0]
      const url = prefixValue.split(':').slice(1).join(':')
      return { prefix, url }
    })
  }

  if (param === 'forceIntrospection') {
    return value === 'true'
  }

  return value
}

function urlQueryFromSettings(settings: Settings) {
  return validURLOptions.reduce((params, option) => {
    return { ...params, [option]: serializeURLParam(option, settings[option]) }
  }, {})
}

function serializeURLParam(param, value) {
  if (param === 'prefixes') {
    return value.map(({ prefix, url }) => `${prefix}:${url}`)
  }

  return value
}

</script>

<script lang="ts">

export default {
  name: 'SpexOverview',
}

</script>
