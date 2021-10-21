<template>
  <Header />
  <router-view :key="$route.path" />
  <notification />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import Notification from './components/layout/Notification.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
    Notification,
  }
})
</script>
