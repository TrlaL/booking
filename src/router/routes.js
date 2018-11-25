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
    component: Activities
  },
  {
    path: '/account',
    component: Account
  },
  {
    path: '/booking',
    component: Booking
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