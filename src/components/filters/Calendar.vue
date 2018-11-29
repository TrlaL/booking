<template>
  <div class="calendar">
    <div class="header">
      <img class="prev" src="/static/images/arrow-left.png" @click="prev">
      <div class="month">{{ monthName }} ({{ year }})</div>
      <img class="next" src="/static/images/arrow-right-calendar.png" @click="next">
    </div>
    <table class="table">
      <tr>
        <th v-for="(day, i) in days" :key="i">{{ day }}</th>
      </tr>
      <tr v-for="(row, i) in calendar" :key="i">
        <td v-for="(cell, j) in row" :class="className(cell)" :key="j" @click="setDate(cell)">
          {{ cell }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      calendar: [],
      date: 0,
      days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      month: 10,
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      year: 2018
    }
  },
  computed: {
    monthName () {
      return this.months[this.month]
    }
  },
  created () {
    let date = new Date()
    this.date = date.getDate()
    this.month = date.getMonth()
    this.year = date.getFullYear()
    this.draw()
  },
  methods: {
    className (value) {
      let date = new Date()
      return {
        item: value,
        selected: this.date === value && this.month === date.getMonth() && this.year === date.getFullYear()
      }
    },
    draw () {
      let date = new Date(this.year, this.month)
      let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
      let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
      let started = false
      let counter = 1
      this.day = new Date().getDate()
      this.calendar = new Array(5).fill([]).map((row, i) => {
        return new Array(7).fill(null).map((cell, j) => {
          if (j === firstDay) started = true
          if (started && counter <= lastDay) return counter++
        })
      })
    },
    next () {
      this.month = (this.month === this.months.length - 1) ? 0 : this.month + 1
      this.year = (this.month === 0) ? this.year + 1 : this.year
      this.draw()
    },
    prev () {
      this.month = (this.month === 0) ? this.months.length - 1 : this.month - 1
      this.year = (this.month === this.months.length - 1) ? this.year - 1 : this.year
      this.draw()
    },
    setDate (date) {
      let target = new Date(this.year, this.month, date)
      this.$emit('setDate', target.getTime())
    }
  }
}
</script>

<style lang="scss" scoped>
.calendar {
  user-select: none;
}

.header {
  align-items: center;
  color: #000;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 25px;

  .prev,
  .next {
    cursor: pointer;
  }
}

.table {
  color: #333333;
  font-size: 13px;
  text-align: center;
  width: 100%;

  th {
    font-weight: 550;
  }

  .item {
    cursor: pointer;
  }

  .selected {
    background: #D9429F;
    border-radius: 30px;
    color: #fff;
    font-weight: bold;
  }
}
</style>