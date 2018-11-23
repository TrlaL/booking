<template>
  <div class="container">
    <Navigation title="PAST BOOKED" />
    <div class="box">
      <ActivityMenu :isLoaded="isLoaded" />
      <PastBookedList :isLoaded="isLoaded" :items="items" />
    </div>
  </div>
</template>

<script>
import ActivityMenu from './common/ActivityMenu'
import Navigation from './common/Navigation'
import PastBookedList from './past-booked/PastBookedList'

export default {
  components: {
    ActivityMenu,
    Navigation,
    PastBookedList
  },
  data () {
    return {
      isLoaded: true,
      items: []
    }
  }
}
</script>