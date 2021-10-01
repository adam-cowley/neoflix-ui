<template>
  <Header />
  <router-view/>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
  }
})
</script>
