<template>
  <movie-grid
    :title="title"
    :to="path"
    :sort="sort"
    :order="order"
    :showLoadMore="true"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { MovieOrderBy, ORDER_BY_RATING, ORDER_BY_RELEASE } from '@/modules/movies'
import { ORDER_DESC } from '@/modules/api'
import MovieGrid from '@/components/ui/home/MovieGrid.vue'

export default defineComponent({
  components: {
    MovieGrid
  },
  setup () {
    const route = useRoute()
    const path = route.path.substr(1)

    let title = 'Movies'
    let sort: MovieOrderBy = ORDER_BY_RELEASE

    switch (path) {
      case 'popular':
        title = 'Popular Movies'
        sort = ORDER_BY_RATING
        break

      case 'latest':
        title = 'Latest Releases'
        sort = ORDER_BY_RELEASE
        break
    }

    return {
      title,
      path,
      sort,
      order: ORDER_DESC
    }
  }
})
</script>
