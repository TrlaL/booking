import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filters: {},
    isLoadedItems: true,
    modalVisible: false,
    openedDropDownId: 1
  },
  getters: {
    filters (state) {
      return state.filters
    },
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
    SET_FILTERS (state, filters) {
      state.filters = { ...filters }
    },
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