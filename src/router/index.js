import Vue from 'vue'
import VueRouter from 'vue-router'
import { layout, route } from '../util/routes'

Vue.use(VueRouter)

const routes = [
  layout('default', [
    route('Home'),
    route('About', '/about')
  ])
]

const router = new VueRouter({
  routes
})

export default router
