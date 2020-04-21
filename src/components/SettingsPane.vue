<template>
  <b-collapse class="card" animation="slide" :open.sync="open">
    <div
      slot="trigger"
      class="card-header"
      role="button"
    >
      <p class="card-header-title">Options</p>
    </div>
    <form class="card-content" @submit.prevent="submit">
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
  </b-collapse>
</template>

<script>
export default {
  props: {
    settings: Object
  },

  data () {
    return {
      open: false
    }
  },

  methods: {
    submit () {
      this.open = false
      this.$emit('change', this.settings)
    }
  }
}
</script>
