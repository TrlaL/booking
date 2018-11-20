<template>
  <div class="account container">
    <Navigation title="MY ACCOUNT" />
    <AccountList />
  </div>
</template>

<script>
import Navigation from './common/Navigation'
import AccountList from './account/AccountList'

export default {
  components: {
    Navigation,
    AccountList
  }
}
</script>