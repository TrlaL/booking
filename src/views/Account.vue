<template>
  <div class="container">
    <Navigation title="MY ACCOUNT" />
    <AccountMain />
  </div>
</template>

<script>
import AccountMain from '@/components/account/AccountMain'
import Navigation from '@/components/common/Navigation'

export default {
  components: {
    AccountMain,
    Navigation
  }
}
</script>