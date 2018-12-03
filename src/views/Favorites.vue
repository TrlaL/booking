<template>
  <div class="container">
    <Navigation title="MY FAVORITES" />
    <div class="box">
      <ActivityTypes @changeItem="changeActivitiesType" />
      <FavoritesList :items="items" />
      <Loading v-show="!isLoadedItems" />
      <div class="pagination" v-show="paginationVisible">
        <button @click="getNextPage">Next Page</button>
      </div>
    </div>
  </div>
</template>

<script>
import ActivityTypes from '@/components/common/ActivityTypes'
import FavoritesList from '@/components/favorites/FavoritesList'
import Loading from '@/components/common/Loading'
import Navigation from '@/components/common/Navigation'
import { getFavorites } from '@/api/favorites'

export default {
  components: {
    ActivityTypes,
    FavoritesList,
    Loading,
    Navigation
  },
  data () {
    return {
      items: [],
      itemsPerPage: 10,
      page: 1,
      pagesCount: 0
    }
  },
  computed: {
    isLastPage () {
      return this.page === this.pagesCount
    },
    isLoadedItems () {
      return this.$store.getters.isLoadedItems
    },
    paginationVisible () {
      return this.isLoadedItems && this.items.length && !this.isLastPage
    }
  },
  created () {
    this.getFavorites({ activityTypeId: 1 })
  },
  methods: {
    async getFavorites (params) {
      this.$store.commit('SET_LOADED_STATUS', false)
      let response = await getFavorites(params)
      if (response.data.result) {
        this.$store.commit('SET_LOADED_STATUS', true)
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
      this.page = (this.page + 1 > this.pagesCount) ? this.pagesCount : this.page + 1
      this.getFavorites({
        activityTypeId: this.activityTypeId,
        page: this.page
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@include mobile {
  .container,
  .box {
    all: unset;
  }
}

.pagination {
  padding: 10px;
  text-align: center;
}
</style>