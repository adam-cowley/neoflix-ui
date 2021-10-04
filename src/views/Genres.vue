<template>
  <Hero title="Browse Genres" />

  <div class="container">
    <div class="row">

      <grid>
        <div v-if="loading">Loading Genre list</div>
        <genre v-else v-for="genre in genres" :key="genre.name"
          :to="genre.link"
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

export default defineComponent({
  components: {
    Hero,
    Grid,
    Genre,
  },
  setup() {
    const { loading, genres } = useGenres()

    return {
      loading,
      genres,
    }
  }
})
</script>
