<template>
  <div class="container">
    <Navigation title="MY FAVORITES" />
    <div class="box">
      <ActivityMenu />
      <FavoritesList :items="items" />
    </div>
  </div>
</template>

<script>
import ActivityMenu from './common/ActivityMenu'
import FavoritesList from './favorites/FavoritesList'
import Navigation from './common/Navigation'
import { getFavorites } from '../api/favorites'

export default {
  components: {
    ActivityMenu,
    FavoritesList,
    Navigation
  },
  data () {
    return {
      items: []
    }
  },
  async created () {
    let response = await getFavorites()
    console.log(response)
  }
}
</script>