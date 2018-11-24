<template>
  <div class="container">
    <Navigation title="KIDS AND CAREGIVERS" />
    <Family />
  </div>
</template>

<script>
import Family from './family/Family'
import Navigation from './common/Navigation'

export default {
  components: {
    Family,
    Navigation
  }
}
</script>