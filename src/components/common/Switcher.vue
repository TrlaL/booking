<template>
  <div class="switcher" :class="className" @click="toggle"></div>
</template>

<script>
export default {
  data () {
    return {
      isActive: this.active
    }
  },
  computed: {
    className () {
      return {
        'switcher-active': this.isActive
      }
    }
  },
  methods: {
    toggle () {
      this.isActive = !this.isActive
      this.$emit('input', this.isActive)
    }
  },
  props: {
    active: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.switcher {
  background: #E3E0E1;
  border-radius: 11px;
  cursor: pointer;
  height: 22px;
  padding: 5px;
  position: relative;
  width: 46px;
}

.switcher::after {
  background: #fff;
  border-radius: 100%;
  content: '';
  display: block;
  height: 12px;
  width: 12px;
}

.switcher-active {
  background: #9BE151;
}

.switcher-active::after {
  position: absolute;
  right: 5px;
}
</style>