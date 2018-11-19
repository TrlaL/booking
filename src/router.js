import Vue from 'vue'
import Router from 'vue-router'
import Activities from './components/Activities'
import Family from './components/Family'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Activities
    },
    {
      path: '/family',
      component: Family
    }
  ]
})