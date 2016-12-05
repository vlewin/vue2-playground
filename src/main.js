import Vue from 'vue'
import store from './vuex/store.js'
import router from './router'
import App from './App.vue'

export let eventHub = new Vue()
// import { sync } from 'vuex-router-sync'

// sync the router with the vuex store.
// this registers `store.state.route`
// sync(store, router)

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('app')


export { app, router, store }
