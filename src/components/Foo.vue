<template>
  <div>
    <h2>FOO</h2>
    <p>{{ message }} - {{ view }}</p>

    <ol id="foos">
      <li v-for="foo in foos">
        {{ foo.name }}
        <button class="btn btn-primary" v-on:click="remove(foo)">delete</button>
      </li>
    </ol>

    <button class="btn btn-primary" v-on:click="add">+1 Foo</button>
    <button class="btn btn-primary" v-on:click="clear">Remove all</button>
  </div>
</template>

<script>
  import FooStore from './../vuex/foo_store.js'
  export default {
    name: 'Foo',
    data () {
      return {
        view: 'Foo'
      }
    },

    beforeMount () {
      FooStore.dispatch('FETCH_FOOS', {
        ids: [this.id]
      })
    },

    computed: {
      message () {
        return this.$store.state.message
      },

      foos () {
        return FooStore.state.foos
      },
    },

    methods: {
      add() {
        FooStore.dispatch('CREATE_FOO', { name: this.name })
      },

      remove(foo) {
        FooStore.dispatch('DELETE_FOO', foo)
      },

      clear() {
        FooStore.dispatch('RESET_FOOS')
      },
    }
  }
</script>
