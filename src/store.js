import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    modalVisible: true,
    openedDropDownId: 1
  },
  getters: {
    isLoading (state) {
      return state.isLoading
    },
    modalVisible (state) {
      return state.modalVisible
    },
    openedDropDownId (state) {
      return state.openedDropDownId
    }
  },
  mutations: {
    SET_LOADING_STATUS (state, status) {
      state.isLoading = status
    },
    SET_MODAL_VISIBLE (state, visible) {
      state.modalVisible = visible
    },
    SET_OPENED_DROP_DOWN_ID (state, id) {
      state.openedDropDownId = id
    }
  }
})