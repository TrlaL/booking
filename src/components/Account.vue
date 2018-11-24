<template>
  <div class="container">
    <Navigation title="MY ACCOUNT" />
    <Account />
  </div>
</template>

<script>
import Account from './account/Account'
import Navigation from './common/Navigation'

export default {
  components: {
    Account,
    Navigation
  }
}
</script>