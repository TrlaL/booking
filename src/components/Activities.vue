<template>
  <div class="container box">
    <ActivitiesControls />
    <ActivitiesList />
  </div>
</template>

<script>
import ActivitiesControls from './activities/ActivitiesControls'
import ActivitiesList from './activities/ActivitiesList'

export default {
  components: {
    ActivitiesControls,
    ActivitiesList
  }
}
</script>

<style lang="scss" scoped>
@include mobile {
  .container,
  .box {
    all: unset;
  }
}
</style>