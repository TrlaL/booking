import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoadedItems: true,
    modalVisible: false,
    openedDropDownId: 1
  },
  getters: {
    isLoadedItems (state) {
      return state.isLoadedItems
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
      state.isLoadedItems = status
    },
    SET_MODAL_VISIBLE (state, visible) {
      state.modalVisible = visible
    },
    SET_OPENED_DROP_DOWN_ID (state, id) {
      state.openedDropDownId = id
    }
  }
})