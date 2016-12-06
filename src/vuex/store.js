import Vue from 'vue'
import Vuex from 'vuex'

import BarStore from './bar_store.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    message: 'Welcome',
    barState: BarStore.state
  },

  actions: {
  },

  mutations: {
  },

  getters: {
  }
})

export default store
