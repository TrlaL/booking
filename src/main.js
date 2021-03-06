import Vue from 'vue'
import App from './App'
import router from './router/'
import store from './store/'

new Vue({
  components: { App },
  router: router,
  store: store,
  template: '<App />'
}).$mount('#app')