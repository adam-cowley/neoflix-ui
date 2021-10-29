<template>
  <div v-if="loading"></div>
  <div v-else-if="!data"></div>
  <section v-else class="section section--head section--gradient">
    <div class="container">
      <div class="article">
        <div class="row">
          <div class="col-xl-3" v-if="data.poster">
            <img :src="data.poster" alt="" />
          </div>
          <div class="col-12 col-xl-9">
            <div class="article__content">
              <h1 v-html="data.name" />

              <ul class="list">
                <li></li>
                <li>{{ data.born }}</li>
                <li>{{ data.bornIn }}</li>
              </ul>

              <p v-html="data.bio" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-xl-8">
            <div class="comments">
              <ul
                class="nav nav-tabs comments__title comments__title--tabs"
                role="tablist"
              >
                <li class="nav-item">
                  <a
                    class="nav-link"
                    :class="{ active: tab === 'acted' }"
                    data-toggle="tab"
                    href="#tab-1"
                    role="tab"
                    aria-controls="tab-1"
                    aria-selected="true"
                    @click.prevent="setTab('acted')"
                  >
                    <h4>Acted In</h4>
                    <span>{{ data.actedCount }}</span>
                  </a>
                </li>

                <li
                  class="nav-item"
                  v-if="data.directedCount && data.directedCount > 0"
                >
                  <a
                    class="nav-link"
                    :class="{ active: tab === 'directed' }"
                    data-toggle="tab"
                    href="#tab-2"
                    role="tab"
                    aria-controls="tab-2"
                    aria-selected="false"
                    @click.prevent="setTab('directed')"
                  >
                    <h4>Directed</h4>
                    <span>{{ data.directedCount }}</span>
                  </a>
                </li>
              </ul>
              <div class="tab-content">
                <Grid v-if="tab === 'acted'">
                  <div v-if="actedInLoading.value">Loading...</div>
                  <template v-else>
                    <template v-for="movie in actedIn" :key="movie.tmdbId">
                      <MovieGridItem
                        v-if="movie"
                        :key="movie.tmdbId"
                        :to="{ name: 'MovieView', params: { id: movie.tmdbId } }"
                        :tmdbId="movie.tmdbId"
                        :title="movie.title"
                        :imdbRating="movie.imdbRating"
                        :rating="movie.rating"
                        :poster="movie.poster"
                        :list="[{ name: movie.role }]"
                        :favorite="movie.favorite"
                      />
                    </template>
                  </template>
                  <div class="row" v-if="actedInMore">
                    <div class="col-12">
                      <button
                        class="catalog__more"
                        type="button"
                        @click="() => actedInLoadMore()"
                      >
                        Load more
                      </button>
                    </div>
                  </div>
                </Grid>

                <Grid v-if="tab === 'directed'">
                  <div v-if="directedLoading.value">Loading...</div>
                  <template v-else>
                    <template v-for="movie in directed" :key="movie.tmdbId">
                      <MovieGridItem
                        v-if="movie"
                        :key="movie.tmdbId"
                        :to="{ name: 'MovieView', params: { tmdbId: movie.tmdbId } }"
                        :tmdbId="movie.tmdbId"
                        :title="movie.title"
                        :imdbRating="movie.imdbRating"
                        :rating="movie.rating"
                        :poster="movie.poster"
                        :list="[{ name: movie.role }]"
                        :favorite="movie.favorite"
                      />
                    </template>
                  </template>
                  <div class="row" v-if="directedMore">
                    <div class="col-12">
                      <button
                        class="catalog__more"
                        type="button"
                        @click="() => directedLoadMore()"
                      >
                        Load more
                      </button>
                    </div>
                  </div>
                </Grid>
              </div>
            </div>
          </div>

          <div class="col-12 col-xl-4">
            <div class="sidebar sidebar--mt">
              <h3 class="sidebar-title">Similar People</h3>
              <div class="row">
                <div class="col-12">
                  <Grid>
                    <div v-if="similarLoading.value">Loading...</div>
                    <template v-else>
                      <template v-for="person in similar" :key="person.tmdbId">
                        <PersonGridItem
                          class="col-md-6 col-xl-6"
                          :tmdbId="person.tmdbId"
                          :name="person.name"
                          :poster="person.poster"
                          :born="person.born"
                          :bornIn="person.bornIn"
                        />
                      </template>
                    </template>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Grid from '@/components/ui/grid/Grid.vue'
import MovieGridItem from '@/components/ui/grid/Movie.vue'
import PersonGridItem from '@/components/ui/grid/Person.vue'
import { useRoute } from 'vue-router'
import { usePerson, useSimilarPeople } from '@/modules/people'
import { useMoviesByActor, useMoviesByDirector } from '@/modules/movies'

export default defineComponent({
  components: {
    Grid,
    MovieGridItem,
    PersonGridItem,
  },
  setup() {
    const { params } = useRoute()
    const { loading, data, error } = usePerson(params.tmdbId as string)

    const tab = ref<string>('acted') // 'acted' | 'directed' | 'similar'

    const setTab = (value: string) => {
      tab.value = value
    }

    const {
      loading: actedInLoading,
      data: actedIn,
      more: actedInMore,
      loadMore: actedInLoadMore,
    } = useMoviesByActor(params.tmdbId as string)

    const {
      loading: directedLoading,
      data: directed,
      more: directedMore,
      loadMore: directedLoadMore,
    } = useMoviesByDirector(params.tmdbId as string)

    const { loading: similarLoading, data: similar } = useSimilarPeople(
      params.tmdbId as string
    )

    return {
      loading,
      data,
      error,

      tab,
      setTab,

      actedIn,
      actedInLoading,
      actedInMore,
      actedInLoadMore,

      directed,
      directedLoading,
      directedMore,
      directedLoadMore,

      similarLoading,
      similar,
    }
  },
})
</script>

<style scoped>
.article__content {
  padding-top: 80px;
  padding-bottom: 60px;
}
img {
  display: block;
  width: 100%;
  max-width: 280px;
  border-radius: 12px;
  margin-bottom: 12px;
}
</style>
