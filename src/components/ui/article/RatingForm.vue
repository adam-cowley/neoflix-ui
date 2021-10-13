<template>
  <form action="#" class="reviews__form">
    <div class="row">
      <div class="col-12 col-md-9 col-lg-10 col-xl-9">
        <div class="sign__group">
          <select name="select" id="select" class="sign__select">
            <option>Rating</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
        </div>
      </div>

      <div class="col-12 col-md-3 col-lg-2 col-xl-3">
        <div class="sign__group">
          <button type="button" class="sign__btn">Rate</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    id: Number
  }
})
</script>

<style scoped>
.reviews__form {
  margin-bottom: 24px;
}
</style>
