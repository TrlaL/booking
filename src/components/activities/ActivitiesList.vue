<template>
  <div class="activities-list">
    <div class="list" v-if="items.length">
      <Activity
        class="item"
        :key="i"
        :item="item"
        v-for="(item, i) in items"
      />
    </div>
    <div class="empty" v-else-if="itemsIsLoaded && !items.length">It's empty here</div>
  </div>
</template>

<script>
import Activity from '../common/Activity'

export default {
  components: {
    Activity
  },
  computed: {
    itemsIsLoaded () {
      return this.$store.getters.itemsIsLoaded
    }
  },
  props: {
    items: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
@include desktop {
  .activities {
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

.empty {
  font-size: 20px;
  text-align: center;
}
</style>