<template>
  <div class="container">
    <Navigation title="I’M GOING" />
    <GoingList />
  </div>
</template>

<script>
import Navigation from './common/Navigation'
import GoingList from './going/GoingList'

export default {
  components: {
    Navigation,
    GoingList
  }
}
</script>