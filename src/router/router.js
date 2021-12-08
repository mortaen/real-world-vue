import Vue from 'vue'
import Router from 'vue-router'
import EventList from '../pages/EventList.vue'
import EventCreate from '../pages/EventCreate.vue'
import EventShow from '../pages/EventShow.vue'
import NProgress from 'nprogress'
import store from '@/store/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList,
      props: true,
    },
    {
      path: '/event/:id',
      name: 'event-show',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: EventShow,
      beforeEnter(routeTo, routeFrom, next) {
        store.dispatch('event/fetchEvent', routeTo.params.id).then((event) => {
          routeTo.params.event = event
          next()
        })
      },
      props: true,
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate,
    },
  ],
})

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
