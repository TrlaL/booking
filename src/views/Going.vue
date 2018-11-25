<template>
  <div class="container">
    <Navigation title="I’M GOING" />
    <div class="box">
      <ActivityMenu />
      <GoingList :items="items" />
      <Loading v-show="!isLoadedItems" />
    </div>
  </div>
</template>

<script>
import ActivityMenu from '@/components/common/ActivityMenu'
import GoingList from '@/components/going/GoingList'
import Loading from '@/components/common/Loading'
import Navigation from '@/components/common/Navigation'

export default {
  components: {
    ActivityMenu,
    GoingList,
    Loading,
    Navigation
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