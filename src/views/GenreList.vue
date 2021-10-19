<template>
  <Hero title="Browse Genres" />

  <div class="container">
    <div class="row">
      <grid v-if="loading">
        <placeholder />
        <placeholder />
        <placeholder />
        <placeholder />
      </grid>

      <grid v-else>
        <genre v-for="genre in genres" :key="genre.name"
          :to="{ name: 'GenreView', params: { name: genre.name } }"
          :poster="genre.poster"
          :name="genre.name"
          :movies="genre.movies"
        />
      </grid>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useGenres } from '@/modules/genres'
import Hero from '@/components/layout/Hero.vue'
import Grid from '@/components/ui/grid/Grid.vue'
import Genre from '@/components/ui/grid/Genre.vue'
import Placeholder from '@/components/ui/grid/Placeholder.vue'

export default defineComponent({
  components: {
    Hero,
    Grid,
    Genre,
    Placeholder,
  },
  setup() {
    const { loading, data: genres } = useGenres()

    return {
      loading,
      genres: genres,
    }
  }
})
</script>
