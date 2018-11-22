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
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import Modal from './components/common/Modal'

export default {
  components: {
    Footer,
    Header,
    Modal
  }
}
</script>

<style>
@import './assets/css/poppins.css';
@import './assets/css/general.css';
@import './assets/css/animations.css';
</style>