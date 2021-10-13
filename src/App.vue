<template>
  <Header />
  <router-view :key="$route.path" />
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
