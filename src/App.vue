<template>
  <div class="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/common/Header'
import Footer from './components/common/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import './assets/css/poppins.css';
@import './assets/css/general.css';
</style>