<template>
  <div class="family container">
    <Navigation title="KIDS AND CAREGIVERS" />
    <FamilyList />
  </div>
</template>

<script>
import Navigation from './common/Navigation'
import FamilyList from './family/FamilyList'

export default {
  components: {
    Navigation,
    FamilyList
  }
}
</script>