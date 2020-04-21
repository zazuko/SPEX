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
