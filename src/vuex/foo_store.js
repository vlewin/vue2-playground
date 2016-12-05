import Vue from 'vue'
import Vuex from 'vuex'
import { fetchFoos } from './../services/foo.js'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    message: 'Custom store',
    foos: {/* [id: number]: Item */},
  },

  actions: {
    FETCH_FOOS: ({ commit, state }, { }) => {
      console.log('ACTIONS: FETCH_FOOS')
      return fetchFoos().then(foos => commit('SET_FOOS', { foos }))
    },

    CREATE_FOO: ({ commit, state }, { foo }) => {
      let id = Object.keys(state.foos).length + 1
      let item = {
        id: id,
        name: `FooItem ${id}`
      }
      commit('ADD_FOO_EVENT', item)
    },

    DELETE_FOO: ({ commit, state }, item) => {
      console.log('ACTIONS: DELETE_FOO')
      commit('REMOVE_FOO_EVENT', item)
    },

    RESET_FOOS: ({ commit, state }) => {
      console.log('ACTIONS: RESET_FOOS')
      commit('CLEAR_FOOS_EVENT')
    }

  },

  mutations: {
    SET_FOOS: (state, { foos }) => {
      console.log('EVENTS: SET_FOOS')
      console.log(foos)
      foos.forEach(item => {
        if (item) {
          console.log(state.foos)
          Vue.set(state.foos, item.id, item)
        }
      })
    },

    ADD_FOO_EVENT: (state, item) => {
      Vue.set(state.foos, item.id, item)
    },

    REMOVE_FOO_EVENT: (state, item) => {
      console.log('EVENTS: REMOVE_FOO_EVENT')
      console.log(item)
      Vue.delete(state.foos, item.id)
    },

    CLEAR_FOOS_EVENT: (state) => {
      console.log('EVENTS: CLEAR_FOOS_EVENT')
      state.foos = {}
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
