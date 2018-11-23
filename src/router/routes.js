import Account from '@/components/Account'
import Activities from '@/components/Activities'
import Booking from '@/components/Booking'
import Family from '@/components/Family'
import Favorites from '@/components/Favorites'
import Going from '@/components/Going'
import PastBooked from '@/components/PastBooked'

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