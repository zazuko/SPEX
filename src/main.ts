import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import './styles/index.css'

/*
test migration
*/
// localStorage.setItem('settings', '{"url":"https://ld.bafu.zazukoians.org/query","user":null,"password":null,"graph":null,"prefixes":[{"prefix":"admin","url":"https://schema.ld.admin.ch/"},{"prefix":"cube","url":"https://cube.link/metadata/"}],"forceIntrospection":false}')
const app = createApp(App)

app.use(router).mount('#app')
