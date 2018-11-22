<template>
  <div class="account container">
    <Navigation title="MY ACCOUNT" />
    <AccountList />
  </div>
</template>

<script>
import AccountList from './account/AccountList'
import Navigation from './common/Navigation'

export default {
  components: {
    AccountList,
    Navigation
  }
}
</script>