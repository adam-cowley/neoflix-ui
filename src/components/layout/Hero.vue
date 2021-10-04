<template>
  <section class="section section--head">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="section__title section__title--head">{{ title }}</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: String,
  },
})
</script>
