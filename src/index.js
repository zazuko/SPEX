import Vue from 'vue'
import {
  Autocomplete,
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
  Switch,
  Toast,
  Tooltip,
} from 'buefy'
import { library as iconsLibrary } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog'
import { faClipboard } from '@fortawesome/free-solid-svg-icons/faClipboard'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faSync } from '@fortawesome/free-solid-svg-icons/faSync'
import { faTable } from '@fortawesome/free-solid-svg-icons/faTable'
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle'
import { faUpload } from '@fortawesome/free-solid-svg-icons/faUpload'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Spex from './components/Spex.vue'
import './styles/index.css'

export { default as Spex } from './components/Spex.vue'

export function initialize (Vue) {
  Vue.config.productionTip = false

  iconsLibrary.add(
    faBars,
    faAngleDown,
    faClipboard,
    faCog,
    faExternalLinkAlt,
    faEye,
    faEyeSlash,
    faMinus,
    faPlus,
    faSync,
    faTable,
    faTimes,
    faTimesCircle,
    faUpload,
  )
  Vue.component('FontAwesomeIcon', FontAwesomeIcon)

  Vue.use(Autocomplete)
  Vue.use(Button)
  Vue.use(Field)
  Vue.use(Icon)
  Vue.use(Input)
  Vue.use(Modal)
  Vue.use(Navbar)
  Vue.use(Loading)
  Vue.use(Radio)
  Vue.use(Select)
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
