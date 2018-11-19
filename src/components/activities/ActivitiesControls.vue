<template>
  <div class="activities-controls">
    <div class="filters">
      <img src="/static/images/filters.png">
      Filters
      <img src="/static/images/arrow-bottom.png">
    </div>
    <div class="search">
      <input placeholder="Try “Chess” or “Ballet”" type="text">
      <button>
        <img src="/static/images/search.png">
      </button>
    </div>
    <Menu />
  </div>
</template>

<script>
import Menu from '../common/Menu'

export default {
  components: {
    Menu
  }
}
</script>

<style lang="scss" scoped>
@include desktop {
  .activities-controls {
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    padding: 16px 66px 16px 66px;
  }

  .filters,
  .search,{
    align-items: center;
    border: 1px solid #D9429F;
    border-radius: 5px;
    color: #D9429F;
    display: flex;
    flex: 1;
    font-size: 17px;
    justify-content: space-between;
    max-width: 250px;
    padding: 5px 17px 5px 17px;
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

@include mobile {
  .activities-controls {
    display: none;
  }
}
</style>