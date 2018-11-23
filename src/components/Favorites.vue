<template>
  <div class="container">
    <Navigation title="MY FAVORITES" />
    <div class="box">
      <ActivityMenu />
      <FavoritesList :items="items" />
      <Loading v-show="!itemsIsLoaded" />
    </div>
  </div>
</template>

<script>
import ActivityMenu from './common/ActivityMenu'
import FavoritesList from './favorites/FavoritesList'
import Loading from './common/Loading'
import Navigation from './common/Navigation'
import { getFavorites } from '../api/favorites'

export default {
  components: {
    ActivityMenu,
    FavoritesList,
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
  },
  created () {
    this.getFavorites()
  },
  methods: {
    async getFavorites (params, query) {
      this.$store.commit('SET_LOADED_STATUS', false)
      let response = await getFavorites(params, query)
      if (response.data.result) {
        this.$store.commit('SET_LOADED_STATUS', true)
        this.items = this.items.concat(response.data.items)
        this.pagesCount = response.data.pages.pagesCount
      }
    }
  }
}
</script>