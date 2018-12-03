<template>
  <div class="container">
    <Navigation title="I’M GOING" />
    <div class="box">
      <ActivityMenu @changeItem="changeActivitiesType" />
      <GoingList :items="items" />
      <Loading v-show="!isLoadedItems" />
      <div class="pagination" v-show="paginationVisible">
        <button @click="getNextPage">Next Page</button>
      </div>
    </div>
  </div>
</template>

<script>
import ActivityMenu from '@/components/common/ActivityMenu'
import GoingList from '@/components/going/GoingList'
import Loading from '@/components/common/Loading'
import Navigation from '@/components/common/Navigation'
import { getCurrentActivities } from '@/api/bookings'

export default {
  components: {
    ActivityMenu,
    GoingList,
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
    this.getCurrentActivities({ activityTypeId: 1 })
  },
  methods: {
    async getCurrentActivities (params) {
      this.$store.commit('SET_LOADED_STATUS', false)
      let response = await getCurrentActivities(params)
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
      this.getCurrentActivities({ activityTypeId: this.activityTypeId })
    },
    getNextPage () {
      this.page = (this.page + 1 > this.pagesCount) ? this.pagesCount : this.page + 1
      this.getCurrentActivities({
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
</style>