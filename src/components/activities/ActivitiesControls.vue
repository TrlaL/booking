<template>
  <div class="activities-controls">
    <div class="controls">
      <div class="filters" :class="className" @click="toggleFilters">
        <img src="/static/images/filters.png">
        Filters
        <img :src="`/static/images/${filtersArrow}`">
      </div>
      <div class="search">
        <input v-model="query" placeholder="Try “Chess” or “Ballet”" type="text">
        <img class="reset" @click="reset" src="/static/images/reset-input.png">
        <button @click="search">
          <img src="/static/images/search.png">
        </button>
      </div>
      <Menu />
    </div>
    <div class="filters" v-show="filters">
      <ActivitiesFilters />
    </div>
  </div>
</template>

<script>
import ActivitiesFilters from './ActivitiesFilters'
import Menu from '../common/Menu'

export default {
  components: {
    ActivitiesFilters,
    Menu
  },
  data () {
    return {
      filters: false,
      query: ''
    }
  },
  computed: {
    className () {
      return {
        clicked: this.filters
      }
    },
    filtersArrow () {
      return this.filters ? 'arrow-top.png' : 'arrow-bottom.png'
    }
  },
  methods: {
    reset () {
      this.query = ''
      this.$emit('search', this.query)
    },
    search (reset = false) {
      this.$emit('search', this.query)
    },
    toggleFilters () {
      this.filters = !this.filters
    }
  }
}
</script>

<style lang="scss" scoped>
@include desktop {
  .activities-controls {
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    padding: 16px 66px 16px 66px;
  }

  .controls {
    display: flex;
    flex: 0 1 1;
    justify-content: space-between;
    max-height: 40px;
    user-select: none;

    .filters,
    .search {
      align-items: center;
      border: 1px solid #D9429F;
      border-radius: 5px;
      color: #D9429F;
      cursor: pointer;
      display: flex;
      flex: 1;
      font-size: 17px;
      justify-content: space-between;
      max-width: 250px;
      padding: 5px 17px 5px 17px;
    }

    .filters.clicked {
      background: #D9429F;
      color: #fff;
    }

    .search {
      display: flex;
      padding: 0;

      input {
        border: 0;
        border-radius: 5px 0 0 5px;
        flex: 1;
        height: 100%;
        padding: 0 18px 0 18px;
        width: 100%;
      }

      button {
        background: #D9429F;
        border: 0;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
        height: 100%;
      }

      .reset {
        margin-right: 10px;
      }
    }
  }

  .filters {
    flex: 1;
  }
}

@include mobile {
  .activities-controls {
    display: none;
  }
}
</style>