<template>
  <div class="past-booked-list">
    <div class="list" v-if="items.length">
      <Activity
        class="item"
        type="past-booked"
        :key="item.id"
        :item="item"
        v-for="item in items"
      />
    </div>
    <div class="empty" v-else-if="isLoadedItems && !items.length">It's empty here</div>
  </div>
</template>

<script>
import Activity from '../common/Activity'

export default {
  components: {
    Activity
  },
  computed: {
    isLoadedItems () {
      return this.$store.getters.isLoadedItems
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
.empty {
  background: #fff !important;
  padding: 10px;
  text-align: center;
}

@include desktop {
  .past-booked-list {
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