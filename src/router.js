import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Bar from './components/Bar.vue'
import Foo from './components/Foo.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/bar', component: Bar },
    { path: '/foo', component: Foo },
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
