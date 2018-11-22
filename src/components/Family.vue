<template>
  <div class="family container">
    <Navigation title="KIDS AND CAREGIVERS" />
    <FamilyList />
  </div>
</template>

<script>
import FamilyList from './family/FamilyList'
import Navigation from './common/Navigation'

export default {
  components: {
    FamilyList,
    Navigation
  }
}
</script>