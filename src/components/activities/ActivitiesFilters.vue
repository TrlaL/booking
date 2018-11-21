<template>
  <transition name="fade">
    <div class="activities-filters" v-show="visible">
      filters
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visible: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.activities-filters {
  background: #fff;
  left: 0;
  height: 500px;
  top: 100%;
  width: 100%;
}
</style>