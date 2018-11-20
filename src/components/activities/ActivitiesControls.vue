<template>
  <div class="activities-controls">
    <div class="controls">
      <div class="filters" :class="className" @click="toggleFilters">
        <img src="/static/images/filters.png">
        Filters
        <img :src="`/static/images/${filtersArrow}`">
      </div>
      <div class="search">
        <input placeholder="Try “Chess” or “Ballet”" type="text">
        <button>
          <img src="/static/images/search.png">
        </button>
      </div>
      <Menu />
    </div>
    <div class="filters" v-show="filters">
      <br>
      <br>
      <br>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
import Menu from '../common/Menu'

export default {
  components: {
    Menu
  },
  data () {
    return {
      filters: false
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
        height: 100%;
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