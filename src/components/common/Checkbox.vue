<template>
  <div class="checkbox" @click="toggle">
    <div class="toggle" :style="style"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: this.value
    }
  },
  computed: {
    hasSlot () {
      return this.$slots.default
    },
    style () {
      return {
        background: this.active ? '#E1519F' : '#E3E0E1',
        height: `${this.size}px`,
        marginRight: this.hasSlot ? '10px' : 0,
        width: `${this.size}px`
      }
    }
  },
  methods: {
    toggle () {
      this.active = !this.active
      this.$emit('input', this.active)
    }
  },
  props: {
    size: {
      default: '12',
      type: String
    },
    value: {
      default: false,
      type: Boolean
    }
  },
  watch: {
    value (value) {
      this.active = value
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

.toggle {
  background: #E3E0E1;
  border-radius: 100%;
  height: 12px;
  margin-right: 10px;
  width: 12px;
}

.toggle-active {
  background: #E1519F;
}
</style>