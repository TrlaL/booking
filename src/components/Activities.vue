<template>
  <div class="container box">
    <ActivitiesControls />
    <ActivitiesMenu />
    <ActivitiesList />
  </div>
</template>

<script>
import ActivitiesControls from './activities/ActivitiesControls'
import ActivitiesMenu from './activities/ActivitiesMenu'
import ActivitiesList from './activities/ActivitiesList'

export default {
  components: {
    ActivitiesControls,
    ActivitiesMenu,
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