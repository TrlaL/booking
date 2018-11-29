<template>
  <div class="container box">
    <ActivitiesControls @search="search" />
    <ActivityMenu @changeItem="changeActivitiesType" />
    <ActivitiesList :items="items" />
    <Loading v-show="!isLoadedItems" />
    <div class="pagination" v-show="paginationVisible">
      <button @click="getNextPage">Next Page</button>
    </div>
  </div>
</template>

<script>
import ActivitiesControls from '@/components/activities/ActivitiesControls'
import ActivitiesList from '@/components/activities/ActivitiesList'
import ActivityMenu from '@/components/common/ActivityMenu'
import Loading from '@/components/common/Loading'
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
    this.getActivities()
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