<template>
  <div class="past-booked-list box">
    <ActivityMenu />
    <div class="list">
      <Activity class="item" type="past-booked" />
    </div>
  </div>
</template>

<script>
import Activity from '../common/Activity'
import ActivityMenu from '../common/ActivityMenu'

export default {
  components: {
    Activity,
    ActivityMenu
  }
}
</script>

<style lang="scss" scoped>
@include desktop {
  .list {
    padding: 0 15px 15px 15px;
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
  .box {
    all: unset;
  }

  .past-booked-list {
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