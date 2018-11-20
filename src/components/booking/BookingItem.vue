<template>
  <div class="booking-item">
    <img class="image" src="/static/images/family/child-5.png">
    <div class="name">
      <div>Eric Lookson</div>
      <div>Kid</div>
    </div>
    <div class="controls">
      <Switcher />
      <div class="price">$20</div>
    </div>
  </div>
</template>

<script>
import Switcher from '../common/Switcher'

export default {
  components: {
    Switcher
  }
}
</script>

<style lang="scss" scoped>
.booking-item {
  align-items: center;
  display: flex;
  margin-bottom: 20px;
}

.image {
  border-radius: 100%;
  margin-right: 15px;
}

.name {
  flex: 1;
  line-height: 22px;

  div:first-child {
    color: #463A3E;
    font-size: 16px;
    font-weight: 400;
  }

  div:last-child {
    color: #918A8C;
    font-size: 13px;
  }
}

.controls {
  color: #918A8C;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
}
</style>