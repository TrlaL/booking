import Vue from 'vue'
import App from './App'
import router from './router.js'

new Vue({
  components: { App },
  router: router,
  template: '<App />'
}).$mount('#app')