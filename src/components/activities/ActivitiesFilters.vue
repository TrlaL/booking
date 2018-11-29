<template>
  <transition name="fade">
    <div class="activities-filters" v-show="visible">
      <div class="columns">
        <div class="column">
          <div class="filter">
            <div class="title">When would you like to go?</div>
            <Calendar @setDate="setDate" />
          </div>
          <div class="filter">
            <div class="line">
              <div>{{ time[0] | translateHour }}</div>
              <div>{{ time[1] | translateHour }}</div>
            </div>
            <Slider ref="timeSlider" v-bind="timeSliderOptions" v-model="time" />
          </div>
          <div class="filter">
            <div class="title">Select activity type(s):</div>
            <div class="line">
              Academic / Educational
              <Checkbox size="20" v-model="activitiesTypes[0]" />
            </div>
            <div class="line">
              Creative / Artistic
              <Checkbox size="20" :value="activitiesTypes[1]" />
            </div>
            <div class="line">
              Physical / Athletic
              <Checkbox size="20" :value="activitiesTypes[2]" />
            </div>
            <div class="line">
              Entertainment
              <Checkbox size="20" :value="activitiesTypes[3]" />
            </div>
          </div>
        </div>
        <div class="column">
          <div class="filter">
            <div class="title">Kid(s) age?</div>
            <Table @setItem="setItem" />
          </div>
          <div class="filter">
            <div class="title">Price:</div>
            <div class="line">
              <div>${{ price[0] }}</div>
              <div>${{ price[1] }}</div>
            </div>
            <Slider ref="priceSlider" v-bind="priceSliderOptions" v-model="price" />
          </div>
          <div class="filter">
            <div class="title">Additional filters:</div>
            <div class="line">
              Caregiver must be present
              <Checkbox size="20" v-model="additional[0]" />
            </div>
            <div class="line">
              Sleepaway camps only
              <Checkbox size="20" v-model="additional[1]" />
            </div>
            <div class="line">
              Weekend activities only
              <Checkbox size="20" v-model="additional[2]" />
            </div>
          </div>
        </div>
        <div class="column">
          <div class="filter">
            <div class="title">Select location/ neighborhood(s):</div>
            <DropDownList title="Manhattan" :id="1" :opened="true" :items="[1, 2, 3, 4, 5]" />
            <DropDownList title="Brooklyn" :id="2" :items="[1, 2, 3, 4, 5, 6]" />
            <DropDownList title="Queens" :id="3" :items="[1, 2, 3, 4]" />
          </div>
        </div>
      </div>
      <div class="buttons">
        <button>Apply</button>
        <a>Cancel</a>
      </div>
    </div>
  </transition>
</template>

<script>
import Checkbox from '../common/Checkbox'
import Calendar from '../filters/Calendar'
import DropDownList from '../filters/DropDownList'
import Slider from 'vue-slider-component'
import Table from '../filters/Table'

export default {
  components: {
    Checkbox,
    Calendar,
    DropDownList,
    Slider,
    Table
  },
  data () {
    return {
      activitiesTypes: [true, true, true, true],
      additional: [false, false, false],
      date: null,
      price: [0, 200],
      time: [8, 20],
      sliderOptions: {
        bgStyle: {
          background: '#ccc'
        },
        processStyle: {
          background: '#D9429F'
        },
        dotSize: 20,
        enableCross: false,
        height: 5,
        tooltip: false,
        tooltipMerge: true
      }
    }
  },
  computed: {
    priceSliderOptions () {
      return {
        ...this.sliderOptions,
        min: 0,
        max: 200
      }
    },
    timeSliderOptions () {
      return {
        ...this.sliderOptions,
        min: 8,
        max: 20
      }
    }
  },
  filters: {
    translateHour (hour) {
      if (hour >= 12 && hour <= 23) {
        hour = (hour - 12 === 0) ? 12 + 'AM' : hour - 12 + 'PM'
      } else {
        hour = hour + 'AM'
      }
      return hour
    }
  },
  methods: {
    setDate (date) {
      this.date = date
    },
    setItem (item) {
      this.item = item
    }
  },
  props: {
    visible: {
      required: true,
      type: Boolean
    }
  },
  watch: {
    visible (value) {
      if (!value) return
      let timer = setTimeout(() => {
        this.$refs.timeSlider.refresh()
        this.$refs.priceSlider.refresh()
        clearTimeout(timer)
      }, 100)
    }
  }
}
</script>

<style lang="scss" scoped>
.columns {
  background: #fff;
  display: flex;
  user-select: none;
}

.column {
  flex: 1;
  margin: 0 120px 80px 0;

  &:last-child {
    margin: 0;
  }

  .filter {
    margin-bottom: 40px;

    &:last-child {
      margin: 0;
    }
  }

  .title {
    color: #4F4F4F;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .line {
    color: #4F4F4F;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

    &:last-child {
      margin: 0;
    }
  }
}

.buttons {
  margin-bottom: 20px;

  button {
    background: #D9429F;
    border: 0;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    margin-right: 30px;
    padding: 15px 40px 15px 40px;
  }

  a {
    color: #828282;
    cursor: pointer;
    font-size: 15px;
    text-decoration: underline;
  }
}

@include mobile {
  .columns {
    flex-direction: column;
    padding: 20px;
  }

  .column {
    margin: 0 0 40px 0;
  }
}
</style>