<template>
  <div class="container">
    <Navigation title="PAST BOOKED" />
    <div class="box">
      <ActivityMenu />
      <PastBookedList :items="items" />
      <Loading v-show="!isLoadedItems" />
    </div>
  </div>
</template>

<script>
import ActivityMenu from './common/ActivityMenu'
import Navigation from './common/Navigation'
import Loading from './common/Loading'
import PastBookedList from './past-booked/PastBookedList'

export default {
  components: {
    ActivityMenu,
    Navigation,
    Loading,
    PastBookedList
  },
  computed: {
    isLoadedItems () {
      return this.$store.getters.isLoadedItems
    }
  },
  data () {
    return {
      items: []
    }
  }
}
</script>