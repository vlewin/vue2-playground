<template>
  <div>
    <app-header></app-header>
    <hr>

    <div id="content">
      <router-view></router-view>
    </div>

    <hr>
    <app-footer></app-footer>
  <div>
</template>

<script>
  import AppHeader from './AppHeader.vue'
  import AppFooter from './AppFooter.vue'

  export default {
    data () {
      return {
      }
    },

    components: {
      AppHeader,
      AppFooter
    }
  }
</script>

<style>

</style>
