<template>
  <div id="app">
    <b-navbar>
      <template slot="start">
        <b-navbar-item tag="router-link" to="/">
          Home
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/overview">
          Overview
        </b-navbar-item>
      </template>
    </b-navbar>

    <router-view/>
  </div>
</template>

<style>
html, body, #app {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
}
</style>
