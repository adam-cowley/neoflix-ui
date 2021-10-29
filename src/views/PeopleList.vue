<template>
  <div class="catalog catalog--page">
    <Hero title="People" />
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="catalog__nav">
            <div class="slider-radio">
              <template v-for="order in orderBy" :key="order.value">
                <input
                  name="sort"
                  @change.prevent="setSort(order.value)"
                  type="radio"
                  :value="order.value"
                  :id="order.value"
                  :checked="order.value === sort"
                />
                <label :for="order.value">{{ order.label }}</label>
              </template>
            </div>
          </div>
        <grid v-if="loading">
          <placeholder />
          <placeholder />
          <placeholder />
          <placeholder />
          <placeholder />
          <placeholder />
        </grid>
        <grid v-else>
          <person
            v-for="person in data"
            :key="person.tmdbId"
            :tmdbId="person.tmdbId"
            :name="person.name"
            :poster="person.poster"
            :born="person.born"
            :bornIn="person.bornIn"
          />
        </grid>

        <div class="row" v-if="more">
          <div class="col-12">
            <button
              class="catalog__more"
              type="button"
              @click="() => loadMore()"
            >
              Load more
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Grid from '@/components/ui/grid/Grid.vue'
import Hero from '@/components/layout/Hero.vue'
import Person from '@/components/ui/grid/Person.vue'
import Placeholder from '@/components/ui/grid/Placeholder.vue'
import { usePeople, PERSON_ORDER } from '@/modules/people'

export default defineComponent({
  components: {
    Grid,
    Hero,
    Person,
    Placeholder,
  },
  setup() {
    const { loading, data, more, loadMore, sort, setSort } = usePeople()

    return {
      loading,
      data,
      more,
      loadMore,
      sort,
      setSort,
      orderBy: PERSON_ORDER,
    }
  },
})
</script>
