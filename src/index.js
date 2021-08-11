import { createApp } from 'vue'
import Spex from './components/Spex.vue'
import './styles/index.css'

export { default as Spex } from './components/Spex.vue'

export function render (selector, settings) {
  const app = createApp(Spex, { settings })

  app.mount(selector)
}
