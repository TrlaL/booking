<template>
  <div class="container">
    <Navigation title="KIDS AND CAREGIVERS" />
    <Family />
  </div>
</template>

<script>
import Family from '@/components/family/Family'
import Navigation from '@/components/common/Navigation'

export default {
  components: {
    Family,
    Navigation
  }
}
</script>