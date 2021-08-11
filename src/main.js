import { createApp } from 'vue'
import { initialize } from '.'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import './styles/index.css'

const app = createApp(App)
initialize(app)

app.use(router).mount('#app')
