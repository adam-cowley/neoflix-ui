<template>
  <div class="col-12 col-sm-6 col-lg-4 col-xl-3 loading">
    <div class="category__cover">
      <img src="/img/poster-placeholder.png" alt="" />
    </div>
    <h3 class="category__title">Loading...</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GridPlaceholder'
})
</script>
