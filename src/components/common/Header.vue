<template>
  <div class="header">
    <div class="container">
      <div class="desktop">
        <router-link to="/">
          <img class="logo" src="/static/images/logo-desktop.svg">
        </router-link>
        <div class="links">
          <a href="#">Browse Activities</a>
          <a href="#">Browse Featured Providers</a>
          <a class="button" href="#">FEATURE YOUR<br>ACTIVITIES</a>
        </div>
      </div>
      <div class="mobile">
        <router-link to="/">
          <img class="logo" src="/static/images/logo-mobile.svg">
        </router-link>
        <template v-if="isHome">
          <div class="filters">
            <button :class="{ opened: isFiltersOpened }" @click="toggleFilters">Filters</button>
          </div>
          <div class="search">
            <input placeholder="Try “Chess”" type="text" v-model="query">
            <div class="reset" @click="reset"><img src="/static/images/reset-input.svg"></div>
            <button @click="search"><img src="/static/images/search.svg"></button>
          </div>
        </template>
        <img class="icon" src="/static/images/user-black.svg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      query: this.searchQuery
    }
  },
  computed: {
    isFiltersOpened () {
      return this.$store.getters.isFiltersOpened
    },
    isHome () {
      return this.$route.path === '/'
    },
    searchQuery () {
      return this.$store.getters.searchQuery
    }
  },
  methods: {
    reset () {
      this.$store.commit('SET_SEARCH_QUERY', '')
    },
    search () {
      this.$store.commit('SET_SEARCH_QUERY', this.query)
    },
    toggleFilters () {
      this.$store.commit('SET_FILTERS_OPENED', !this.isFiltersOpened)
    }
  },
  watch: {
    searchQuery (query) {
      this.query = query
    }
  }
}
</script>

<style lang="scss" scoped>
@include desktop {
  .header {
    background: $gradient;
    height: 85px;
  }

  .container {
    height: 100%;
  }

  .desktop {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: space-between;
  }

  .links {
    align-items: center;
    display: flex;
    justify-content: center;

    a {
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      margin-right: 40px;
      text-decoration: none;
    }

    a:last-child {
      margin: 0;
    }

    .button {
      background: #ffffff;
      border-radius: 5px;
      color: #69BCB5;
      font-weight: 500;
      padding: 6px 18px 6px 18px;
      text-align: center;
    }
  }

  .mobile {
    display: none;
  }
}

@include mobile {
  .mobile {
    align-items: center;
    box-sizing: unset;
    display: flex;
    justify-content: space-between;
    height: 30px;
    padding: 7px;
  }

  .logo {
    margin-right: 6px;
  }

  .filters {
    align-items: center;
    display: flex;
    flex: 1;
    height: 100%;
    margin-right: 6px;

    button {
      background: #fff;
      border: 1px solid #828282;
      border-radius: 5px;
      color: #828282;
      cursor: pointer;
      font: inherit;
      height: 100%;
      width: 100%;
    }

    button.opened {
      background: #D9429F;
      border: 0;
      color: #fff;
    }
  }

  .search {
    align-items: center;
    display: flex;
    flex: 1;
    height: 100%;
    margin-right: 6px;

    input {
      border: 1px solid #828282;
      border-right: 0;
      border-radius: 5px 0 0 5px;
      height: 100%;
      padding: 0 10px 0 10px;
      width: 100%;
    }

    input::placeholder {
      color: #BDBDBD;
    }

    button {
      background: #D9429F;
      border: 0;
      border-radius: 0 5px 5px 0;
      cursor: pointer;
      height: 100%;
    }

    .reset {
      align-items: center;
      border-top: 1px solid #828282;
      border-bottom: 1px solid #828282;
      cursor: pointer;
      display: flex;
      height: 100%;
      padding: 5px;
    }
  }

  .icon {
    cursor: pointer;
    height: 34px;
    width: 34px;
  }

  .desktop {
    display: none;
  }
}
</style>