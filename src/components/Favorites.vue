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
import Navigation from './common/Navigation'
import FavoritesList from './favorites/FavoritesList'
import { getFavorites } from '../api/favorites'

export default {
  components: {
    Navigation,
    ActivityMenu,
    FavoritesList
  },
  data () {
    return {
      isLoaded: false,
      items: [],
      itemsPerPage: 10,
      page: 1,
      pagesCount: 0
    }
  },
  created () {
    this.getFavorites()
  },
  methods: {
    async getFavorites (params) {
      this.isLoaded = false
      let response = await getFavorites(params)
      if (response.data.result) {
        this.isLoaded = true
        this.items = this.items.concat(response.data.items)
        this.pagesCount = response.data.pages.pagesCount
      }
    },
    changeActivitiesType (index) {
      this.items = []
      this.page = 1
      this.activityTypeId = index + 1
      this.getFavorites({ activityTypeId: this.activityTypeId })
    },
    getNextPage () {
      this.getFavorites({
        activityTypeId: this.activityTypeId,
        page: ++this.page,
        ipp: this.itemsPerPage
      })
    }
  }
}
</script>