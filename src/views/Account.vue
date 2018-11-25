<template>
  <div class="container">
    <Navigation title="MY ACCOUNT" />
    <Account />
  </div>
</template>

<script>
import Account from '@/components/account/Account'
import Navigation from '@/components/common/Navigation'

export default {
  components: {
    Account,
    Navigation
  }
}
</script>