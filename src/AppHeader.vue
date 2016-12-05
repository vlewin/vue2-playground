<template>
  <div>
    <h1>HEADER</h1>

    <ul class="tab tab-block">
      <li class="tab-item" v-bind:class="{ active: active('/') }">
        <router-link to="/">Home</router-link>
      </li>
      <li class="tab-item" v-bind:class="{ active: active('/bar') }">
        <router-link to="/bar">Bar</router-link>
      </li>
      <li class="tab-item" v-bind:class="{ active: active('/foo') }">
        <router-link to="/foo">Foo</router-link>
      </li>
    </ul>
</template>

<script>
  export default {
    data () {
      return {
      }
    },

    methods: {
      active: function(tab) {
        return this.$route.path == tab
      }
    }
  }
</script>
