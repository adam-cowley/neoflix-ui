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
            <router-link to="/register" class="article__btn">Register Now</router-link>
            <router-link to="/genres" class="article__btn article__btn--white">Browse Genres</router-link>
          </div>
        </div>

      </div>
    </div>
  </section>
  <Section
    v-for="carousel in carousels"
    :key="carousel.title"
    :title="carousel.title"
    :to="carousel.to"
  >
    <Grid>
      <Column v-if="carousel.loading.value"> Loading.. </Column>
      <MovieGridItem
        v-else
        v-for="movie in carousel.movies"
        :key="movie.id"
        :to="`/movies/${movie.id}`"
        :title="movie.title"
        :rating="movie.rating"
        :poster="movie.poster"
        :list="movie.genres"
      />
    </Grid>
  </Section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import Section from '@/components/ui/Section.vue'
import Grid from '@/components/ui/grid/Grid.vue'
import MovieGridItem from '@/components/ui/grid/Movie.vue'

import { useLatestMovies, usePopularMovies } from '@/modules/movies'

export default defineComponent({
  name: 'Home',
  components: {
    Section,
    Grid,
    MovieGridItem,
  },
  setup() {
    const popular = usePopularMovies()
    const latest = useLatestMovies()

    const carousels = computed(() => [
      { title: 'Popular', to: '/popular', ...popular },
      { title: 'Latest', to: '/latest', ...latest },
    ])

    return {
      carousels,
    }
  },
})
</script>
