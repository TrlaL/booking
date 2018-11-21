<template>
  <div class="app">
    <Header />
    <transition name="fade">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Modal from './components/common/Modal'

export default {
  components: {
    Header,
    Footer,
    Modal
  }
}
</script>

<style lang="scss">
@import './assets/css/poppins.css';
@import './assets/css/general.css';
@import './assets/css/animations.css';
</style>