<template>
  <div class="app">
    <Header />
    <transition name="fade">
      <router-view />
    </transition>
    <Footer />
    <Modal title="Do you want to cancel this activity?" :buttons="true">
      <div>*Full refund for drop-in if cancelled more than 24 hours  prior to the start of the class/event.</div>
      <div>*Full refund for camps and semesters if cancelled more than 7 days prior to the start of the activity.</div>
      <div>*Unfortunetely if it is past the cancellation period we cannot offer a refund.</div>
    </Modal>
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