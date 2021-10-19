<template>
  <div v-if="genreLoading">
    <Section
      title="Loading"
      to="/genres"
    />
  </div>
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
                  <input name="sort" @change.prevent="setSort(order.value)" type="radio" :value="order.value" :id="order.value" :checked="order.value === sort">
                  <label :for="order.value">{{ order.label }}</label>
                </template>
              </div>
            </div>
          </div>
        </div>

        <grid v-if="moviesLoading">
          <placeholder />
          <placeholder />
          <placeholder />
          <placeholder />
          <placeholder />
          <placeholder />
        </grid>

        <grid v-else>
          <MovieGridItem
            v-for="movie in movies"
            :key="movie.id"
            :to="{name: 'MovieView', params: {id: movie.id}}"
            :title="movie.title"
            :rating="movie.rating"
            :poster="movie.poster"
            :list="movie.genres"
          />
        </grid>

        <div class="row" v-if="more">
          <div class="col-12">
            <button class="catalog__more" type="button" @click="() => loadMore()">Load more</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { defineComponent } from 'vue'
import Placeholder from '@/components/ui/grid/Placeholder.vue'
import { useGenre } from '@/modules/genres'
import { MOVIE_ORDER, ORDER_BY_TITLE, useMoviesByGenre } from '@/modules/movies'
import Section from '@/components/ui/Section.vue'
import Grid from '@/components/ui/grid/Grid.vue'
import MovieGridItem from '@/components/ui/grid/Movie.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {
    Section,
    Grid,
    MovieGridItem,
    Placeholder,
  },
  setup() {
    const { params } = useRoute()

    const { loading: genreLoading, data: genre } = useGenre(params.name)
    const { loading: moviesLoading, data: movies, more, loadMore, sort, setSort } = useMoviesByGenre(params.name, ORDER_BY_TITLE)

    return {
      genreLoading,
      genre: genre,
      moviesLoading,
      movies,
      loadMore,
      more,
      orderBy: MOVIE_ORDER,
      sort,
      setSort,
    }
  },
})
</script>
