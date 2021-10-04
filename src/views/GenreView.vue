<template>
  <div v-if="genreLoading"></div>
  <div v-else>
    <Section
      :title="genre.name"
      :to="genre.link"
      :background="genre.poster"
    />

    <div class="catalog">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="catalog__nav">
              <div class="slider-radio">
                <template v-for="order in orderBy" :key="order.value">
                  <input name="sort" v-model="sort" type="radio" :value="order.value" :id="order.value" :checked="order.value === sort">
                  <label :for="order.value">{{ order.label }}</label>
                </template>
              </div>
            </div>
          </div>
        </div>

        <grid>
          <Column v-if="moviesLoading"> Loading.. </Column>
          <MovieGridItem
            v-else
            v-for="movie in movies"
            :key="movie.id"
            :to="`/movies/${movie.id}`"
            :title="movie.title"
            :rating="movie.rating"
            :poster="movie.poster"
            :list="movie.genres"
          />
        </grid>

        <div class="row">
          <div class="col-12">
            <button class="catalog__more" type="button" @click="loadMore">Load more</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
/* eslint-disable */
import { defineComponent, ref } from 'vue'
import { useGenre } from '@/modules/genres'
import { MOVIE_ORDER, ORDER_BY_TITLE, useMoviesByGenre, getMoviesByGenre } from '@/modules/movies'
import Section from '@/components/ui/Section.vue'
import Grid from '@/components/ui/grid/Grid.vue'
import Column from '@/components/ui/grid/Column.vue'
import MovieGridItem from '@/components/ui/grid/Movie.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {
    Section,
    Grid,
    Column,
    MovieGridItem,
    // Hero,
    // Grid,
    // Genre,
  },
  setup() {
    const { params } = useRoute()

    const sort = ref(ORDER_BY_TITLE)
    const limit = 12

    const { loading: genreLoading, genre } = useGenre(params.name)
    const { loading: moviesLoading, movies: initialMovies } = useMoviesByGenre(params.name, ORDER_BY_TITLE, limit, 0)

    const movies = ref(initialMovies)

    const loadMore = async () => {
      const moreMovies = await getMoviesByGenre(params.name, sort.value, limit, movies.value.length)
      movies.value.push(...moreMovies)

    }

    return {
      genreLoading,
      genre: genre,
      moviesLoading,
      movies,
      loadMore,

      orderBy: MOVIE_ORDER,
      sort,
      limit: 12,

    }
  },
})
</script>
