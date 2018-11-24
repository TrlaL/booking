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
import ActivityMenu from './common/ActivityMenu'
import FavoritesList from './favorites/FavoritesList'
import Loading from './common/Loading'
import Navigation from './common/Navigation'
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