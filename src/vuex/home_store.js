import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    message: 'Welcome Home',
    user: { username: 'Awesome', email: 'awesome@domain.com'}
  }
})

export default store
