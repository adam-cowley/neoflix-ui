<template>
  <div v-if="loading"></div>
  <section
    v-else
    class="section section--head section--gradient section--details-bg"
  >
    <div
      class="section__bg"
      :data-bg="movie.poster"
      :style="`background: url('${movie.poster}') center top / cover no-repeat`"
    ></div>
    <div class="container">
      <!-- article -->
      <div class="article">
        <div class="row">
          <div class="col-12 col-xl-8">
            <!-- article content -->
            <div class="article__content">
              <h1 v-html="movie.title" />

              <ul class="list">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"
                    ></path>
                  </svg>
                  {{ movie.rating }}
                </li>

                <li>{{ movie.year }}</li>
                <li>{{ movie.runtime }} mins</li>
              </ul>

              <p v-html="movie.plot" />
            </div>
            <!-- end article content -->
          </div>

          <div class="col-12 col-xl-8">
            <!-- categories -->
            <div class="categories">
              <!-- <h3 class="categories__title">Genres</h3> -->
              <router-link
                v-for="genre in movie.genres"
                :key="genre.name"
                class="categories__item"
                :to="genre.link"
              >
                {{ genre.name }}
              </router-link>
            </div>
            <!-- end categories -->
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-xl-8">
              <!-- directors -->
              <div class="row row--grid">
                <div class="col-12">
                  <h5 class="sidebar__title">Directed By</h5>
                </div>

                <person
                  v-for="person in movie.directors"
                  :key="person.id"
                  :id="person.id"
                  :name="person.name"
                  :poster="person.poster"
                  :born="person.born"
                  :bornIn="person.bornIn"
                />
              </div>
              <!-- end directors -->

              <!-- actors -->
              <div class="row row--grid">
                <div class="col-12">
                  <h5 class="sidebar__title">Actors</h5>
                </div>

                <person
                  v-for="person in movie.actors"
                  :key="person.id"
                  :id="person.id"
                  :name="person.name"
                  :poster="person.poster"
                  :born="person.born"
                  :bornIn="person.bornIn"
                />
              </div>
              <!-- end actors -->
          </div>

          <div class="col-12 col-xl-4">
            <div class="sidebar sidebar--mt">
            <ratings
              :id="movie.id"
              :count="movie.ratingCount"
            />

            </div>
          </div>
        </div>
      </div>
      <!-- end article -->
    </div>
  </section>

  <section class="section" v-if="similar.length">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="section__title">Similar Movies</h2>
        </div>
      </div>

      <Grid>
        <Column v-if="similarLoading.value"> Loading.. </Column>
        <MovieGridItem
          v-else
          v-for="m in similar"
          :key="m.id"
          :to="`/movies/${m.id}`"
          :title="m.title"
          :rating="m.rating"
          :poster="m.poster"
          :list="m.genres"
        />
      </Grid>
    </div>
  </section>
</template>

<script>
import { useMovie, useSimilarMovies } from '@/modules/movies'
import Grid from '@/components/ui/grid/Grid'
import Column from '@/components/ui/grid/Column'
import MovieGridItem from '@/components/ui/grid/Movie'
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import Ratings from '@/components/ui/article/Ratings.vue'
import Person from '@/components/ui/grid/Person.vue'

export default defineComponent({
  components: {
    Grid,
    Column,
    MovieGridItem,
    Ratings,

    Person,
  },
  setup() {
    const { params } = useRoute()
    const { loading, movie } = useMovie(params.id)

    const { movies: similar, loading: similarLoading } = useSimilarMovies(
      params.id
    )

    return {
      loading,
      movie,
      similar,
      similarLoading,
    }
  },
})
</script>
