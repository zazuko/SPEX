import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { library as iconsLibrary } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'vue-resize/dist/vue-resize.css'
import VueResize from 'vue-resize'

Vue.config.productionTip = false

iconsLibrary.add(fas)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)

Vue.use(Buefy, {
  defaultIconPack: 'fas',
  defaultIconComponent: 'FontAwesomeIcon'
})

Vue.use(VueResize)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
