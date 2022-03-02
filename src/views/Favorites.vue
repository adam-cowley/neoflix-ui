<template>
  <Section
        title="My Favorite Movies"
        to="/genres"
  >
  <grid v-if="code === 401">
    <column>
      <p>You must be logged in to save your favorite movies.</p>

      <p>
        <router-link :to="{name: 'Login'}">Sign in</router-link> or
        <router-link :to="{name: 'Register'}">Register</router-link> to continue.
      </p>
    </column>
  </grid>

  <grid v-else-if="data && data.length">
    <MovieGridItem
      v-for="movie in data"
      :key="movie.tmdbId"
      :to="{name: 'MovieView', params: {tmdbId: movie.tmdbId}}"
      :tmdbId="movie.tmdbId"
      :title="movie.title"
      :imdbRating="movie.imdbRating"
      :rating="movie.rating"
      :poster="movie.poster"
      :list="movie.genres"
      :favorite="movie.favorite"
    />
  </grid>

  <grid v-else>
    <column>
      <p>Your favorite movies will be listed here.</p>
      <p>Click the icon in the top right hand corner of a Movie to save it to your favorites.</p>

      <p>
        <router-link :to="{name: 'PopularMovies'}">View Popular Movies</router-link> or
        <router-link :to="{name: 'LatestMovies'}">check out the latest releases</router-link>.
      </p>
    </column>
  </grid>
  </Section>
</template>

<script>
import { useGetRequest } from '@/modules/api'
import { defineComponent } from 'vue'
import Section from '@/components/ui/Section.vue'
import Column from '@/components/ui/grid/Column.vue'
import Grid from '@/components/ui/grid/Grid.vue'
import MovieGridItem from '@/components/ui/grid/Movie.vue'

export default defineComponent({
  components: {
    Section,
    Column,
    Grid,
    MovieGridItem
  },
  setup () {
    const { loading, data, error, code } = useGetRequest('/account/favorites')

    return {
      loading,
      data,
      error,
      code
    }
  }
})
</script>
