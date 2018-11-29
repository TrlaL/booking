<template>
  <div class="table">
    <div class="row" v-for="(row, i) in rows" :key="i">
      <div class="item" v-for="(item, j) in row" :key="j" @click="setItem(item)">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rows: [
        ['UNDER 1', '1', '2', '3'],
        ['4', '5', '6', '7'],
        ['8', '9', '10', '11'],
        ['12', '13', '14+', 'Caregivers']
      ]
    }
  },
  methods: {
    setItem (item) {
      this.$emit('setItem', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
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

  &:hover {
    background: #D9429F;
    color: #fff;
  }

  &:last-child {
    margin: 0;
  }
}
</style>