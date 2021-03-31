import Vue from 'vue'
import { initialize } from '.'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

initialize(Vue)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
