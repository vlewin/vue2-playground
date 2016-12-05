<template>
  <div>
    <h2>BAR</h2>
    <p>{{ message }} - {{ view }}</p>

    <ol id="bars">
      <li v-for="bar in bars">
        {{ bar.name }}
        <button class="btn btn-primary" v-on:click="remove(bar)">delete</button>
      </li>
    </ol>

    <button class="btn btn-primary" v-on:click="add">+1 Bar</button>
    <button class="btn btn-primary" v-on:click="clear">Remove all</button>
  </div>
</template>

<script>
  import BarStore from './../vuex/bar_store.js'
  export default {
    name: 'Bar',
    data () {
      return {
        view: 'Bar'
      }
    },

    beforeMount () {
      BarStore.dispatch('FETCH_BARS', {
        ids: [this.id]
      })
    },

    computed: {
      message () {
        return this.$store.state.message
      },

      bars () {
        return BarStore.state.bars
      },
    },

    methods: {
      add() {
        BarStore.dispatch('CREATE_BAR', { name: this.name })
      },

      remove(bar) {
        BarStore.dispatch('DELETE_BAR', bar)
      },

      clear() {
        BarStore.dispatch('RESET_BARS')
      },
    }
  }
</script>
