<template>
  <div class="checkbox" :class="className" @click="toggle">
    <slot></slot>
  </div>
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
        'checkbox-active': this.isActive
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
.checkbox {
  align-items: center;
  color: #A1A1A1;
  cursor: pointer;
  display: flex;
  font-size: 11px;
  user-select: none;
}

.checkbox::before {
  background: #E3E0E1;
  border-radius: 100%;
  content: '';
  display: block;
  height: 12px;
  margin-right: 6px;
  width: 12px;
}

.checkbox-active::before {
  background: #E1519F;
}
</style>