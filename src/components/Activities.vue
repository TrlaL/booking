<template>
  <div class="container box">
    <ActivitiesControls @search="search" />
    <ActivityMenu @changeItem="changeActivitiesType" />
    <ActivitiesList :items="items" />
    <Loading v-show="!itemsIsLoaded" />
    <div class="pagination" v-show="itemsIsLoaded && !isLastPage">
      <button @click="getNextPage">Next Page</button>
    </div>
  </div>
</template>

<script>
import ActivitiesControls from './activities/ActivitiesControls'
import ActivitiesList from './activities/ActivitiesList'
import ActivityMenu from './common/ActivityMenu'
import Loading from './common/Loading'
import { getActivities } from '@/api/activities'

export default {
  components: {
    ActivitiesControls,
    ActivitiesList,
    ActivityMenu,
    Loading
  },
  data () {
    return {
      items: [],
      itemsPerPage: 10,
      page: 1,
      pagesCount: 0
    }
  },
  created () {
    this.getActivities()
  },
  computed: {
    isLastPage () {
      return this.page === this.pagesCount
    },
    itemsIsLoaded () {
      return this.$store.getters.itemsIsLoaded
    }
  },
  methods: {
    async getActivities (params, query) {
      this.$store.commit('SET_LOADED_STATUS', false)
      let response = await getActivities(params, query)
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
      this.getActivities({
        filters: {
          activityTypeId: this.activityTypeId
        }
      })
    },
    getNextPage () {
      this.getActivities({
        filters: {
          activityTypeId: this.activityTypeId
        },
        pages: {
          page: ++this.page
        }
      })
    },
    search (value) {
      this.items = []
      this.page = 1
      this.getActivities({
        filters: {
          activityTypeId: this.activityTypeId
        }
      }, value)
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