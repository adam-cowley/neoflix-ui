<template>
  <div
    class="col-6 col-sm-6 col-md-3 col-xl-3"
  >
    <div class="card">
      <router-link :to="'/person/' + id" class="card__cover">
        <img :src="poster" alt="" />
      </router-link>

      <h3 class="card__title">
        <router-link :to="'/person/' + id" v-html="name" />
      </h3>
      <ul class="card__list">
        <!-- todo: date conversion -->
        <li>{{ born }}</li>
        <li>{{ bornIn }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    id: Number,
    name: String,
    poster: String,
    born: Number,
    bornIn: String,
  },
})
</script>
