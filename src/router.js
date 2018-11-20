import Vue from 'vue'
import Router from 'vue-router'
import Account from './components/Account'
import Activities from './components/Activities'
import Family from './components/Family'
import Favorites from './components/Favorites'
import Going from './components/Going'
import PastBooked from './components/PastBooked'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Activities
    },
    {
      path: '/account',
      component: Account
    },
    {
      path: '/family',
      component: Family
    },
    {
      path: '/favorites',
      component: Favorites
    },
    {
      path: '/going',
      component: Going
    },
    {
      path: '/past-booked',
      component: PastBooked
    }
  ]
})