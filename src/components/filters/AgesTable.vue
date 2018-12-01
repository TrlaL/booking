<template>
  <div class="ages-table">
    <div class="row" v-for="(row, i) in rows" :key="i">
      <div
        class="item"
        v-for="(item, j) in row"
        :class="className(i, j)"
        :key="j"
        @click="setAge(item.value, i, j)">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      clicked: [null, null],
      rows: [
        [
          { name: 'UNDER 1', value: 0 },
          { name: '1', value: 1 },
          { name: '2', value: 2 },
          { name: '3', value: 3 }
        ],
        [
          { name: '4', value: 4 },
          { name: '5', value: 5 },
          { name: '6', value: 6 },
          { name: '7', value: 7 }
        ],
        [
          { name: '8', value: 8 },
          { name: '9', value: 9 },
          { name: '10', value: 10 },
          { name: '11', value: 11 }
        ],
        [
          { name: '12', value: 12 },
          { name: '13', value: 13 },
          { name: '14+', value: 14 },
          { name: 'Caregivers', value: 15 }
        ]
      ]
    }
  },
  methods: {
    className (i, j) {
      return {
        clicked: this.clicked[0] === i && this.clicked[1] === j
      }
    },
    setAge (value, i, j) {
      this.active = value
      this.clicked = [i, j]
      this.$emit('input', this.active)
    }
  },
  props: {
    value: {
      default: 0,
      type: Number
    }
  },
  watch: {
    value (val) {
      this.active = val
      if (!this.active) this.clicked = [null, null]
    }
  }
}
</script>

<style lang="scss" scoped>
.ages-table {
  color: #4F4F4F;
  font-size: 12px;
  text-align: center;
  word-spacing: 10000px;
}

.row {
  display: flex;
  height: 40px;
  margin-bottom: 5px;
  width: 100%;

  &:last-child {
    margin: 0;
  }
}

.item {
  align-items: center;
  border: 1px solid #BDBDBD;
  border-radius: 5px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  flex: 1;
  justify-content: center;
  margin-right: 5px;

  &.clicked {
    background: #D9429F;
    color: #fff;
  }

  &:hover {
    background: #D9429F;
    color: #fff;
  }

  &:last-child {
    margin: 0;
  }
}
</style>