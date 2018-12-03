import Account from '@/views/Account'
import Activities from '@/views/Activities'
import Booking from '@/views/Booking'
import Family from '@/views/Family'
import Home from '@/views/Home'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: Activities
  },
  {
    path: '/going',
    name: 'going',
    component: Activities
  },
  {
    path: '/past-booked',
    name: 'past-booked',
    component: Activities
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  },
  {
    path: '/booking/:id',
    name: 'booking',
    component: Booking
  },
  {
    path: '/family',
    name: 'family',
    component: Family
  }
]