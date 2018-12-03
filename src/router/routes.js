import Account from '@/views/Account'
import Activities from '@/views/Activities'
import Booking from '@/views/Booking'
import Family from '@/views/Family'
import Favorites from '@/views/Favorites'
import Going from '@/views/Going'
import PastBooked from '@/views/PastBooked'

export default [
  {
    path: '/',
    name: 'home',
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
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: Favorites
  },
  {
    path: '/going',
    name: 'going',
    component: Going
  },
  {
    path: '/past-booked',
    name: 'past-booked',
    component: PastBooked
  }
]