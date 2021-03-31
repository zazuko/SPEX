import Vue from 'vue'
import {
  Button,
  ConfigProgrammatic,
  Field,
  Icon,
  Input,
  Loading,
  Modal,
  Navbar,
  Radio,
  Select,
  Skeleton,
  Switch,
  Toast,
  Tooltip,
} from 'buefy'
import 'buefy/dist/buefy.css'
import { library as iconsLibrary } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Spex from './components/Spex.vue'

export { default as Spex } from './components/Spex.vue'

export function initialize (Vue) {
  Vue.config.productionTip = false

  iconsLibrary.add(fas)
  Vue.component('FontAwesomeIcon', FontAwesomeIcon)

  Vue.use(Button)
  Vue.use(Field)
  Vue.use(Icon)
  Vue.use(Input)
  Vue.use(Modal)
  Vue.use(Navbar)
  Vue.use(Loading)
  Vue.use(Radio)
  Vue.use(Select)
  Vue.use(Skeleton)
  Vue.use(Switch)
  Vue.use(Toast)
  Vue.use(Tooltip)

  ConfigProgrammatic.setOptions({
    defaultIconPack: 'fas',
    defaultIconComponent: 'FontAwesomeIcon',
    defaultTooltipType: 'is-light',
  })
}

export function render (selector, settings) {
  initialize(Vue)

  new Vue({
    render: h => h(Spex, { props: { settings } }),
  }).$mount(selector)
}
