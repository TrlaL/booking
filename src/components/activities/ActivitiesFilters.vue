<template>
  <transition name="fade">
    <div class="activities-filters" v-show="visible">

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
  border-bottom: 1px solid #ddd;
  left: 0;
  height: 500px;
  top: 100%;
  width: 100%;
}
</style>