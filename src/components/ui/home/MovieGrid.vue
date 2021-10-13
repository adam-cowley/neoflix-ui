<template>
  <Section
    :title="title"
    :to="to"
  >
    <Grid>
      <Column v-if="loading.value"> Loading.. </Column>
      <template v-else>
      <template v-for="movie in data">
        <MovieGridItem

          v-if="movie"
          :key="movie.id"
          :to="`/movies/${movie.id}`"
          :title="movie.title"
          :rating="movie.rating"
          :poster="movie.poster"
          :list="movie.genres"
        />
      </template>
      </template>
    </Grid>
  </Section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Section from '@/components/ui/Section.vue'
import Grid from '@/components/ui/grid/Grid.vue'
import MovieGridItem from '@/components/ui/grid/Movie.vue'
import { useMovieList } from '@/modules/movies'
import { ORDER_DESC } from '@/modules/api'

export default defineComponent({
  components: {
    Section,
    Grid,
    MovieGridItem,
  },
  props: {
    title: String,
    to: String,
    orderBy: String,
  },
  setup(props) {
    const { loading, data } = useMovieList(props.orderBy as string, ORDER_DESC, 5)

    return {
      loading,
      data,
    }
  }

})
</script>
