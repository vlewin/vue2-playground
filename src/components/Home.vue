<template>
  <div>
    <h2>HOME</h2>
    <p>{{ message }} - {{ view }}</p>

    {{ $store.state.data }}
    <!-- <b>Bars list</b>
    <hr>
    <ol id="bars">
      <li v-for="bar in bars">
        {{ bar.name }}
      </li>
    </ol>

    <b>Foos list</b>
    <hr>
    <ol id="foos">
      <li v-for="foo in foos">
        {{ foo.name }}
      </li>
    </ol> -->
  </div>
</template>

<script>
  import HomeStore from './../vuex/home_store.js'
  import FooStore from './../vuex/foo_store.js'

  export default {
    name: 'Home',
    data () {
      return {
        view: 'Home'
      }
    },

    computed:   {
      message () {
        return this.$store.state.message
      },

      bars() {
        return this.$store.state.barState.bars
      },

      foos() {
        return FooStore.state.foos
      }
    }
  }
</script>
