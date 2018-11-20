import Vue from 'vue'
import App from './App'
import router from './router.js'
import store from './store.js'

new Vue({
  components: { App },
  router: router,
  store: store,
  template: '<App />'
}).$mount('#app')