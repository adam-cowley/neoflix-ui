<template>
  <Section
    :title="title"
    :to="to"
  >
    <Grid>
      <div v-if="loading.value"> Loading... </div>
      <template v-else>
        <template v-for="movie in data">
          <MovieGridItem
            v-if="movie"
            :key="movie.tmdbId"
            :to="{name: 'MovieView', params: movie}"
            :tmdbId="movie.tmdbId"
            :title="movie.title"
            :imdbRating="movie.imdbRating"
            :rating="movie.rating"
            :poster="movie.poster"
            :list="movie.genres"
            :favorite="movie.favorite"
          />
        </template>
      </template>
      <div class="row" v-if="showLoadMore && more">
        <div class="col-12">
          <button class="catalog__more" type="button" @click="() => loadMore()">Load more</button>
        </div>
      </div>
    </Grid>
  </Section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Section from '@/components/ui/Section.vue'
import Grid from '@/components/ui/grid/Grid.vue'
import MovieGridItem from '@/components/ui/grid/Movie.vue'
import { useMovieList } from '@/modules/movies'
import { Order, ORDER_DESC } from '@/modules/api'

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
    order: String,
    showLoadMore: Boolean,
  },
  setup(props) {
    const { loading, data, more, loadMore } = useMovieList(props.orderBy as string, props.order as Order || ORDER_DESC, 6)

    return {
      loading,
      data,
      more,
      loadMore
    }
  },
})
</script>
