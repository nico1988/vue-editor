import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const slider = (resolve) => {
  import('@/components/slider/slider.vue').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/elements/icon",
      component: slider,
      children: [
        {
          path: '/elements/:template',
          component: slider
        },
        {
          path: '/chart/:template',
          component: slider
        },
        {
          path: '/layout/:template',
          component: slider
        },
        {
          path: '/component/:template',
          component: slider
        },
      ]
    },
  ]
})