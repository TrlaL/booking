<template>
  <div class="container">
    <Navigation title="I’M GOING" />
    <div class="box">
      <ActivityMenu />
      <GoingList :items="items" />
    </div>
  </div>
</template>

<script>
import ActivityMenu from './common/ActivityMenu'
import GoingList from './going/GoingList'
import Navigation from './common/Navigation'

export default {
  components: {
    ActivityMenu,
    GoingList,
    Navigation
  },
  data () {
    return {
      items: []
    }
  }
}
</script>