<template>

    <section class="section section--head section--head-static section--gradient section--details-bg">
      Hero
    </section>
    <Section v-for="carousel in carousels" :key="carousel.title" :title="carousel.title" :to="carousel.to">

      <Grid>
        <Column v-if="carousel.loading.value">
          Loading..
        </Column>
        <GridItem
          v-else
          v-for="movie in carousel.movies"
          :key="movie.id"
          :to="`/movies/${movie.id}`"
          :title="movie.title"
          :rating="movie.rating"
          :image="movie.poster"
          :list="movie.genres"
        />

      </Grid>
    </Section>

</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import Section from '@/components/ui/Section.vue'
import Grid from '@/components/ui/grid/Grid.vue'
import GridItem from '@/components/ui/grid/Item.vue'

import { useLatestMovies, usePopularMovies } from '@/modules/movies'

export default defineComponent({
  name: 'Home',
  components: {
    Section,
    Grid,
    GridItem,
  },
  setup() {
    const popular = usePopularMovies()
    const latest = useLatestMovies()

    const carousels = computed(() => [
      { title: 'Popular', to: '/popular', ...popular },
      { title: 'Latest', to: '/latest', ...latest },
    ])

    return {
      carousels
    }
  },
})
</script>
