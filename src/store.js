import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modalVisible: true
  },
  getters: {
    modalVisible (state) {
      return state.modalVisible
    }
  },
  mutations: {
    SET_MODAL_VISIBLE (state, visible) {
      state.modalVisible = visible
    }
  }
})