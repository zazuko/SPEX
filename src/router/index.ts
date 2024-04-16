import { createRouter, createWebHashHistory } from 'vue-router'
import Overview from '../views/Overview.vue'

const ShaclEditor = () => import('../views/ShaclEditor.vue')
const RdfEditor = () => import('../views/RdfEditor.vue')

const routes = [
  {
    path: '/',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/shacl',
    name: 'ShaclEditor',
    component: ShaclEditor
  },
  {
    path: '/rdf-editor',
    name: 'RdfEditor',
    component: RdfEditor
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
