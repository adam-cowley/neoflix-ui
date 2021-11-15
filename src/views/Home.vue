<template>
  <section
    class="
      section
      section--head
      section--head-static
      section--gradient
      section--details-bg
    "
  >
    <div class="container">
      <div class="row">
        <div class="col-12 col-xl-6">
          <h1 class="section__title section__title--head">Graph Powered Movie Recommendations</h1>

          <p>Using the power of Graph Databases and Cypher to serve you real-time recommendations.</p>

          <div class="article__btns">
            <router-link :to="{ name: 'Register' }" class="article__btn">Register Now</router-link>
            <router-link :to="{ name: 'GenreList' }" class="article__btn article__btn--white">Browse Genres</router-link>
          </div>
        </div>

      </div>
    </div>
  </section>

  <movie-grid title="Popular Movies" to="/popular" sort="imdbRating" />
  <movie-grid title="Latest Releases" to="/latest" sort="released" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import MovieGrid from '@/components/ui/home/MovieGrid.vue'

export default defineComponent({
  name: 'Home',
  components: {
    MovieGrid,
  },
})
</script>
