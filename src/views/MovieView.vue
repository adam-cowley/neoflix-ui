<template>
  <div v-if="loading"></div>
  <div v-else-if="!movie"></div>
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
      <div class="article">
        <div class="row">
          <div class="col-12 col-xl-8">
            <div class="article__content">
              <h1 v-html="movie.title" />

              <ul class="list">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"
                    ></path>
                  </svg>
                  {{ movie.imdbRating }}
                </li>

                <li>{{ movie.year }}</li>
                <li>{{ movie.runtime }} mins</li>
              </ul>

              <p v-html="movie.plot" />
            </div>
          </div>

          <div class="col-12 col-xl-8" v-if="movie.genres">
            <!-- categories -->
            <div class="categories">
              <router-link
                v-for="genre in movie.genres"
                :key="genre.name"
                class="categories__item"
                :to="{ name: 'GenreView', params: genre }"
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
              <div class="row row--grid" v-if="movie.directors.length">
                <div class="col-12">
                  <h5 class="sidebar__title">Directed By</h5>
                </div>

                <person
                  v-for="person in movie.directors"
                  :key="person.tmdbId"
                  :tmdbId="person.tmdbId"
                  :name="person.name"
                  :poster="person.poster"
                  :born="person.born"
                  :bornIn="person.bornIn"
                />
              </div>
              <!-- end directors -->

              <!-- actors -->
              <div class="row row--grid" v-if="movie.actors.length">
                <div class="col-12">
                  <h5 class="sidebar__title">Actors</h5>
                </div>

                <person
                  v-for="person in movie.actors"
                  :key="person.tmdbId"
                  :tmdbId="person.tmdbId"
                  :name="person.name"
                  :poster="person.poster"
                  :born="person.born"
                  :bornIn="person.bornIn"
                  :role="person.role"
                />
              </div>
              <!-- end actors -->
          </div>

          <div class="col-12 col-xl-4">
            <div class="sidebar sidebar--mt">
            <ratings
              :tmdbId="movie.tmdbId"
              :count="movie.ratingCount"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="section__title">Similar Movies</h2>
        </div>
      </div>

      <Grid>
        <Column v-if="similarLoading.value"> Loading Similar movies... </Column>
        <MovieGridItem
          v-else-if="similar && similar.length"
          v-for="m in similar"
          :key="m.tmdbId"
          :to="{name: 'MovieView', params: m}"
          :title="m.title"
          :rating="m.rating"
          :imdbRating="movie.imdbRating"
          :poster="m.poster"
          :list="m.genres"
          :favorite="movie.favorite"
        >

          <div class="card__extra">
            <svg width="18px" height="18px" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" title="Similarity Score">
              <g id="Page-1" stroke="#ffffff" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14.88,0.48 C15.4101934,0.48 15.84,0.90980664 15.84,1.44" id="Shape"></path>
                  <path d="M1.44,0.48 C0.90980664,0.48 0.48,0.90980664 0.48,1.44" id="Shape"></path>
                  <line x1="15.84" y1="3.36" x2="15.84" y2="4.32" id="Shape"></line>
                  <line x1="12" y1="0.48" x2="12.96" y2="0.48" id="Shape"></line>
                  <line x1="9.12" y1="0.48" x2="10.08" y2="0.48" id="Shape"></line>
                  <line x1="6.24" y1="0.48" x2="7.2" y2="0.48" id="Shape"></line>
                  <line x1="3.36" y1="0.48" x2="4.32" y2="0.48" id="Shape"></line>
                  <line x1="6.24" y1="15.84" x2="7.2" y2="15.84" id="Shape"></line>
                  <line x1="3.36" y1="15.84" x2="4.32" y2="15.84" id="Shape"></line>
                  <path d="M1.44,15.84 C0.90980664,15.84 0.48,15.4101934 0.48,14.88" id="Shape"></path>
                  <line x1="0.48" y1="12.96" x2="0.48" y2="12" id="Shape"></line>
                  <line x1="0.48" y1="10.08" x2="0.48" y2="9.12" id="Shape"></line>
                  <line x1="0.48" y1="7.2" x2="0.48" y2="6.24" id="Shape"></line>
                  <line x1="15.84" y1="7.2" x2="15.84" y2="6.24" id="Shape"></line>
                  <line x1="0.48" y1="4.32" x2="0.48" y2="3.36" id="Shape"></line>
                  <path d="M8.16,22.56 C7.62980664,22.56 7.2,22.1301934 7.2,21.6" id="Shape"></path>
                  <path d="M21.6,22.56 C22.1301934,22.56 22.56,22.1301934 22.56,21.6" id="Shape"></path>
                  <line x1="7.2" y1="19.68" x2="7.2" y2="18.72" id="Shape"></line>
                  <line x1="11.04" y1="22.56" x2="10.08" y2="22.56" id="Shape"></line>
                  <line x1="13.92" y1="22.56" x2="12.96" y2="22.56" id="Shape"></line>
                  <line x1="16.8" y1="22.56" x2="15.84" y2="22.56" id="Shape"></line>
                  <line x1="19.68" y1="22.56" x2="18.72" y2="22.56" id="Shape"></line>
                  <line x1="16.8" y1="7.2" x2="15.84" y2="7.2" id="Shape"></line>
                  <line x1="19.68" y1="7.2" x2="18.72" y2="7.2" id="Shape"></line>
                  <path d="M21.6,7.2 C22.1301934,7.2 22.56,7.62980664 22.56,8.16" id="Shape"></path>
                  <line x1="22.56" y1="10.08" x2="22.56" y2="11.04" id="Shape"></line>
                  <line x1="22.56" y1="12.96" x2="22.56" y2="13.92" id="Shape"></line>
                  <line x1="22.56" y1="15.84" x2="22.56" y2="16.8" id="Shape"></line>
                  <line x1="7.2" y1="15.84" x2="7.2" y2="16.8" id="Shape"></line>
                  <line x1="22.56" y1="18.72" x2="22.56" y2="19.68" id="Shape"></line>
                  <path d="M7.2,8.16 C7.2,7.62980664 7.62980664,7.2 8.16,7.2 L15.84,7.2 L15.84,14.88 C15.84,15.4101934 15.4101934,15.84 14.88,15.84 L7.2,15.84 L7.2,8.16 Z" id="Shape"></path>
              </g>
            </svg>
            {{m.score}}
          </div>
        </MovieGridItem>
        <div v-else>
          We couldn't find any similar.
          <a href="https://en.wikipedia.org/wiki/Cold_start_(recommender_systems)" target="_blank">Cold start problem</a>, huh?
        </div>
      </Grid>
    </div>
  </section>
</template>

<script lang="ts">
import { useMovie, useSimilarMovies } from '@/modules/movies'
import Grid from '@/components/ui/grid/Grid.vue'
import Column from '@/components/ui/grid/Column.vue'
import MovieGridItem from '@/components/ui/grid/Movie.vue'
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
    const { loading, data: movie } = useMovie(params.tmdbId as string)

    const { data: similar, loading: similarLoading } = useSimilarMovies(
      params.tmdbId as string
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

<style>
.card__extra {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin-top: 16px;
  font-size: 12px;
}
.card__extra svg {
  margin-right: 6px;
}
.card__extra svg * {
  stroke: #e0e0e0;
}
</style>
