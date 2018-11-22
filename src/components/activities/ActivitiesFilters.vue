<template>
  <transition name="fade">
    <div class="activities-filters" v-show="visible">
      <div class="column">
        <div class="filter">
          <div class="title">When would you like to go?</div>
          <Calendar />
        </div>
        <div class="filter">
          <input type="range">
        </div>
        <div class="filter">
          <div class="title">Select activity type(s):</div>
          <div class="line" :key="i" v-for="(activity, i) in activities">
            {{ activity }}
            <Checkbox size="20" v-model="activityType" />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="filter">
          <div class="title">Kid(s) age?</div>
          <Table />
        </div>
        <div class="filter">
          <div class="title">Price:</div>
          <input type="range">
        </div>
        <div class="filter">
          <div class="title">Additional filters:</div>
          <div class="line" :key="i" v-for="(item, i) in additional">
            {{ item }}
            <Checkbox size="20" />
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
  </transition>
</template>

<script>
import Checkbox from '../common/Checkbox'
import Calendar from '../filters/Calendar'
import DropDownList from '../filters/DropDownList'
import Table from '../filters/Table'

export default {
  components: {
    Checkbox,
    Calendar,
    DropDownList,
    Table
  },
  data () {
    return {
      activities: ['Academic / Educational', 'Creative / Artistic', 'Physical / Athletic', 'Entertainment'],
      activityType: true,
      additional: ['Caregiver must be present', 'Sleepaway camps only', 'Weekend activities only']
    }
  },
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
  display: flex;
  margin-bottom: 40px;
}

.column {
  flex: 1;
  margin-right: 120px;

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
</style>