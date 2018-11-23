import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemsIsLoaded: true,
    modalVisible: true,
    openedDropDownId: 1
  },
  getters: {
    itemsIsLoaded (state) {
      return state.itemsIsLoaded
    },
    modalVisible (state) {
      return state.modalVisible
    },
    openedDropDownId (state) {
      return state.openedDropDownId
    }
  },
  mutations: {
    SET_LOADED_STATUS (state, status) {
      state.itemsIsLoaded = status
    },
    SET_MODAL_VISIBLE (state, visible) {
      state.modalVisible = visible
    },
    SET_OPENED_DROP_DOWN_ID (state, id) {
      state.openedDropDownId = id
    }
  }
})