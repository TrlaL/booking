<template>
  <div class="activities-list">
    <ActivitiesItem class="item" :key="i" v-for="i in 4" />
  </div>
</template>

<script>
import ActivitiesItem from './ActivitiesItem'

export default {
  components: {
    ActivitiesItem
  }
}
</script>

<style lang="scss" scoped>
@include desktop {
  .activities-list {
    padding: 15px;
  }

  .item {
    border-radius: 5px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    margin-bottom: 15px;
  }

  .item:last-child {
    margin: 0;
  }
}

@include mobile {
  .activities-list {
    background: #eee;
  }

  .item {
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    margin-bottom: 10px;
  }

  .item:last-child {
    margin: 0;
  }
}
</style>