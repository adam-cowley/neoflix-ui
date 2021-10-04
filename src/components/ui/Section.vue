<template>
  <section class="section section--gradient">
    <div v-if="background" class="section__bg" :data-bg="background" :style="`background: url(${background}) center / cover no-repeat;`"></div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="section__title">
              <router-link :to="to" v-html="title" />
            </h2>
        </div>
        <slot />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  props: {
    to: String,
    title: String,
    background: {
      type: String,
      required: false,
    }
  },
})
</script>
