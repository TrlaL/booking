import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filters: {},
    isFiltersOpened: false,
    isLoadedItems: true,
    modalVisible: false,
    openedDropDownId: 1,
    searchQuery: ''
  },
  getters: {
    filters (state) {
      return state.filters
    },
    isFiltersOpened (state) {
      return state.isFiltersOpened
    },
    isLoadedItems (state) {
      return state.isLoadedItems
    },
    modalVisible (state) {
      return state.modalVisible
    },
    openedDropDownId (state) {
      return state.openedDropDownId
    },
    searchQuery (state) {
      return state.searchQuery
    }
  },
  mutations: {
    SET_FILTERS (state, filters) {
      state.filters = { ...filters }
    },
    SET_FILTERS_OPENED (state, opened) {
      state.isFiltersOpened = opened
    },
    SET_LOADED_STATUS (state, status) {
      state.isLoadedItems = status
    },
    SET_MODAL_VISIBLE (state, visible) {
      state.modalVisible = visible
    },
    SET_OPENED_DROP_DOWN_ID (state, id) {
      state.openedDropDownId = id
    },
    SET_SEARCH_QUERY (state, query) {
      state.searchQuery = query
    }
  }
})