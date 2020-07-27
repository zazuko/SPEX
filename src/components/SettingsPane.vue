<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">
        <b-button icon-left="chevron-right" @click="onClose" class="button is-white" title="Close">
          Options
        </b-button>
      </p>
    </div>
    <form class="card-content" @submit.prevent="onSubmit">
      <b-field label="Endpoint URL">
        <b-input v-model="settings.url" />
      </b-field>
      <b-field label="Username">
        <b-input v-model="settings.user" />
      </b-field>
      <b-field label="Password">
        <b-input type="password" v-model="settings.password" password-reveal />
      </b-field>
      <b-field label="Graph">
        <b-input v-model="settings.graph" />
      </b-field>
      <b-field label="Custom prefixes" :addons="false">
        <div v-for="(prefix, index) in settings.prefixes" :key="index" class="prefix-row">
          <b-input v-model="prefix.prefix" placeholder="schema" class="prefix-prefix" required />
          <b-input v-model="prefix.url" placeholder="http://schema.org/" class="prefix-url" required />
          <b-button type="is-white" icon-left="minus" title="Remove prefix" @click="removePrefix(index)" />
        </div>
        <p v-if="settings.prefixes.length === 0" class="has-text-grey">No custom prefix</p>
        <b-button type="is-white" icon-left="plus" title="Add prefix" @click="addPrefix" />
      </b-field>
      <b-field><button class="button is-primary" type="submit">Load</button></b-field>
    </form>
  </div>
</template>

<style scoped>
.card {
  min-height: 100%;
}

.prefix-row {
  display: flex;
  flex-direction: row;
}

.prefix-row > * {
  margin-right: 3px;
  margin-bottom: 3px;
}

.prefix-row > *:last-child {
  margin-right: 0;
  margin-bottom: 0;
}

.prefix-row > .prefix-prefix {
  width: 5rem;
}

.prefix-row > .prefix-url {
  flex-grow: 1;
}
</style>

<script>
export default {
  props: ['settings'],

  methods: {
    onSubmit () {
      this.$emit('change', this.settings)
    },
    onClose () {
      this.$emit('close')
    },
    addPrefix () {
      this.settings.prefixes.push({ prefix: '', url: '' })
    },
    removePrefix (index) {
      this.settings.prefixes.splice(index, 1)
    },
  }
}
</script>
