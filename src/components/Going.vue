<template>
  <div class="container">
    <Navigation title="I’M GOING" />
    <div class="box">
      <ActivityMenu />
      <GoingList :items="items" />
      <Loading v-show="!itemsIsLoaded" />
    </div>
  </div>
</template>

<script>
import ActivityMenu from './common/ActivityMenu'
import GoingList from './going/GoingList'
import Loading from './common/Loading'
import Navigation from './common/Navigation'

export default {
  components: {
    ActivityMenu,
    GoingList,
    Loading,
    Navigation
  },
  computed: {
    itemsIsLoaded () {
      return this.$store.getters.itemsIsLoaded
    }
  },
  data () {
    return {
      items: []
    }
  }
}
</script>