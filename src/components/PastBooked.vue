<template>
  <div class="container">
    <Navigation title="PAST BOOKED" />
    <PastBookedList />
  </div>
</template>

<script>
import Navigation from './common/Navigation'
import PastBookedList from './past-booked/PastBookedList'

export default {
  components: {
    Navigation,
    PastBookedList
  }
}
</script>