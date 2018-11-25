<template>
  <div class="container">
    <Navigation title="MY FAVORITES" />
    <div class="box">
      <ActivityMenu />
      <FavoritesList :items="items" />
      <Loading v-show="!isLoadedItems" />
    </div>
  </div>
</template>

<script>
import ActivityMenu from '@/components/common/ActivityMenu'
import FavoritesList from '@/components/favorites/FavoritesList'
import Loading from '@/components/common/Loading'
import Navigation from '@/components/common/Navigation'
import { getFavorites } from '@/api/favorites'

export default {
  components: {
    ActivityMenu,
    FavoritesList,
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
  },
  async created () {
    getFavorites()
      .then(response => console.log(response))
      .catch(error => console.dir(error))
  }
}
</script>