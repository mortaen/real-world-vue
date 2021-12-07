import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '../pages/EventList.vue'
import EventCreate from '../pages/EventCreate.vue'
import EventShow from '../pages/EventShow.vue'
import User from '../pages/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList,
  },
  {
    path: '/event',
    name: 'event-show',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: EventShow,
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: EventCreate,
  },
]

const router = new VueRouter({
  routes,
})

export default router
