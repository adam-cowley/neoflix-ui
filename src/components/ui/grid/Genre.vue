<template>
  <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
    <router-link :to="to" class="category">
      <div class="category__cover">
        <img :src="posterImage" alt="" />
      </div>
      <h3 class="category__title">{{ name }}</h3>
      <span class="category__value">{{ movies }}</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GenreGridItem',
  props: {
    to: Object,
    poster: String,
    name: String,
    movies: Number
  },
  computed: {
    posterImage () {
      return this.poster || '/img/poster-placeholder.png'
    }
  }
})
</script>
