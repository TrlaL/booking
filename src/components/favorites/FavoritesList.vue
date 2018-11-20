<template>
  <div class="favorites-list box">
    <ActivitieMenu />
    <div class="list">
      <Activitie class="item" type="favorites" :key="i" v-for="i in 2" />
    </div>
  </div>
</template>

<script>
import Activitie from '../common/Activitie'
import ActivitieMenu from '../common/ActivitieMenu'

export default {
  components: {
    Activitie,
    ActivitieMenu
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

  .favorites-list {
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