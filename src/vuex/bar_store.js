import Vue from 'vue'
import Vuex from 'vuex'
import { fetchBars } from './../services/bar.js'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    message: 'Substore',
    bars: {/* [id: number]: Item */},
  },

  actions: {
    FETCH_BARS: ({ commit, state }, { }) => {
      console.log('ACTIONS: FETCH_BARS')
      return fetchBars().then(bars => commit('SET_BARS', { bars }))
    },

    CREATE_BAR: ({ commit, state }, { bar }) => {
      let id = Object.keys(state.bars).length + 1
      let item = {
        id: id,
        name: `BarItem ${id}`
      }
      commit('ADD_BAR_EVENT', item)
    },

    DELETE_BAR: ({ commit, state }, item) => {
      console.log('ACTIONS: DELETE_BAR')
      commit('REMOVE_BAR_EVENT', item)
    },

    RESET_BARS: ({ commit, state }) => {
      console.log('ACTIONS: RESET_BARS')
      commit('CLEAR_BARS_EVENT')
    }

  },

  mutations: {
    SET_BARS: (state, { bars }) => {
      console.log('EVENTS: SET_BARS')
      console.log(bars)
      bars.forEach(item => {
        if (item) {
          console.log(state.bars)
          Vue.set(state.bars, item.id, item)
        }
      })
    },

    ADD_BAR_EVENT: (state, item) => {
      Vue.set(state.bars, item.id, item)
    },

    REMOVE_BAR_EVENT: (state, item) => {
      console.log('EVENTS: REMOVE_BAR_EVENT')
      console.log(item)
      Vue.delete(state.bars, item.id)
    },

    CLEAR_BARS_EVENT: (state) => {
      console.log('EVENTS: CLEAR_BARS_EVENT')
      state.bars = {}
    }
  },

  getters: {
    // ids of the receipts that should be currently displayed based on
    // current list type and current pagination
    // activeIds (state) {
    //   const { activeType, itemsPerPage, lists } = state
    //   const page = Number(state.route.params.page) || 1
    //   if (activeType) {
    //     const start = (page - 1) * itemsPerPage
    //     const end = page * itemsPerPage
    //     return lists[activeType].slice(start, end)
    //   } else {
    //     return []
    //   }
    // },
    //
    // // items that should be currently displayed.
    // // this Array may not be fully fetched.
    // activeItems (state, getters) {
    //   return getters.activeIds.map(id => state.items[id]).filter(_ => _)
    // }
  }
})

export default store
