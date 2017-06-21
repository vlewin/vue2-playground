import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const socket = new WebSocket('ws://localhost:2222')
window.socket = socket
function createWebSocketPlugin (socket) {
  return store => {
    socket.onmessage = (payload) => {
      store.commit('receiveData', payload.data)
    }

    store.subscribe(mutation => {
      if (mutation.type === 'receiveData') {
        console.log('UPDATE_DATA - mutation')
        socket.send('update', mutation.payload)
      }
    })
  }
}
const plugin = createWebSocketPlugin(socket)
const state = {
  data: null
}

const store = new Vuex.Store({
  state,
  actions: {
  },

  mutations: {
    receiveData (state, data) {
      console.log('Mutation', data)
      state.data = data
    }
  },
  plugins: [plugin]
})

export default store
