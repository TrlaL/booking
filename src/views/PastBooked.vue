<template>
  <div class="container">
    <Navigation title="PAST BOOKED" />
    <div class="box">
      <ActivityTypes @changeItem="changeActivitiesType" />
      <PastBookedList :items="items" />
      <Loading v-show="!isLoadedItems" />
      <div class="pagination" v-show="paginationVisible">
        <button @click="getNextPage">Next Page</button>
      </div>
    </div>
  </div>
</template>

<script>
import ActivityTypes from '@/components/common/ActivityTypes'
import Navigation from '@/components/common/Navigation'
import Loading from '@/components/common/Loading'
import PastBookedList from '@/components/past-booked/PastBookedList'
import { getPastActivities } from '@/api/bookings'

export default {
  components: {
    ActivityTypes,
    Navigation,
    Loading,
    PastBookedList
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
    this.getPastActivities({ activityTypeId: 1 })
  },
  methods: {
    async getPastActivities (params) {
      this.$store.commit('SET_LOADED_STATUS', false)
      let response = await getPastActivities(params)
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
      this.getPastActivities({ activityTypeId: this.activityTypeId })
    },
    getNextPage () {
      this.page = (this.page + 1 > this.pagesCount) ? this.pagesCount : this.page + 1
      this.getPastActivities({
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