import Vue from 'vue'
import Router from 'vue-router'
import EventList from '../pages/EventList.vue'
import EventCreate from '../pages/EventCreate.vue'
import EventShow from '../pages/EventShow.vue'
import NProgress from 'nprogress'
import store from '@/store/store'
import NotFound from '../pages/NotFound.vue'
import NetworkIssue from '../pages/NetworkIssue.vue'

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
        store
          .dispatch('event/fetchEvent', routeTo.params.id)
          .then((event) => {
            routeTo.params.event = event
            next()
          })
          .catch((error) => {
            if (error.response && error.response.status == 404) {
              next({
                name: '404',
                params: { resource: 'event' },
              })
            } else {
              next({ name: 'network-issue' })
            }
          })
      },
      props: true,
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate,
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
      props: true,
    },
    {
      path: '/network-issue',
      name: 'network-issue',
      component: NetworkIssue,
    },
    {
      // Here's the new catch all route
      path: '*',
      redirect: { name: '404', params: { resource: 'page' } },
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
