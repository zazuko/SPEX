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
      <b-field label="Endpoint">
        <b-input v-model="settings.endpoint" />
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
      <b-field><button class="button is-primary" type="submit">Load</button></b-field>
    </form>
  </div>
</template>

<style scoped>
.card {
  min-height: 100%;
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
    }
  }
}
</script>
