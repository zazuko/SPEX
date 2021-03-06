<template>
  <Spex :settings="settings" @settings-change="onSettingsChange" />
</template>

<script>
import { isNavigationFailure, NavigationFailureType } from 'vue-router/src/util/errors'
import Spex from '@/components/Spex.vue'
import config from '@/config'

export default {
  components: { Spex },

  data () {
    const urlSettings = settingsFromURL(this.$route.query)
    const localSettings = settingsFromLocalStorage()
    const settings = { ...config, ...localSettings, ...urlSettings }

    return {
      settings,
    }
  },

  methods: {
    onSettingsChange (settings) {
      this.settings = settings
      saveSettingsInLocalStorage(settings)
      this.updateURL(settings)
    },

    async updateURL (settings) {
      const query = urlQueryFromSettings(settings)
      try {
        await this.$router.push({ query })
      } catch (err) {
        // Ignore duplicated navigation error
        if (!isNavigationFailure(err, NavigationFailureType.duplicated)) {
          throw err
        }
      }
    },

  },
}

function settingsFromLocalStorage () {
  const settings = localStorage.getItem('settings')
  return settings ? JSON.parse(settings) : {}
}

function saveSettingsInLocalStorage (settings) {
  localStorage.setItem('settings', JSON.stringify(settings))
}

const validURLOptions = ['url', 'graph', 'prefixes', 'forceIntrospection']

function settingsFromURL (params) {
  return validURLOptions.reduce((settings, option) => {
    if (option in params) {
      settings[option] = deserializeURLParam(option, params[option])
    }
    return settings
  }, {})
}

function deserializeURLParam (param, value) {
  if (param === 'prefixes') {
    if (typeof value === 'string') {
      value = [value]
    }

    return value.map((prefixValue) => {
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

function urlQueryFromSettings (settings) {
  return validURLOptions.reduce((params, option) => {
    return { ...params, [option]: serializeURLParam(option, settings[option]) }
  }, {})
}

function serializeURLParam (param, value) {
  if (param === 'prefixes') {
    return value.map(({ prefix, url }) => `${prefix}:${url}`)
  }

  return value
}
</script>
