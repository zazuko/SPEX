import Vue from 'vue'
import VueRouter from 'vue-router'
import Overview from '../views/Overview.vue'

const ShaclEditor = () => import('../views/ShaclEditor.vue')
const RdfEditor = () => import('../views/RdfEditor.vue')

Vue.use(VueRouter)

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

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
