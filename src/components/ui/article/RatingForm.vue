<template>
  <form action="#" class="reviews__form">
    <div class="row" v-if="!authenticated">
      <div class="col-12">
        <p>
          You must
          <router-link :to="{ name: 'Register'}">Register</router-link>
          or
          <router-link :to="{ name: 'Login'}">Sign In</router-link>
          to leave a review.
        </p>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-12 col-md-9 col-lg-10 col-xl-9">
        <div class="sign__group">
          <select name="select" id="select" class="sign__select" v-model="rating">
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
          <button type="button" class="sign__btn" @click.prevent="onSubmit" :disabled="loading">Rate</button>
        </div>
      </div>
    </div>
    <div class="error" v-if="error">
      {{error}}
    </div>
    <div class="confirmation" v-else-if="confirmation">
      {{confirmation}}
    </div>
  </form>
</template>

<script lang="ts">
import { usePostRequest } from '@/modules/api'
import { useAuth } from '@/modules/auth'
import { Movie } from '@/modules/movies'
import { defineComponent, ref, watch } from 'vue'

interface RatingPayload {
  rating: number
}

export default defineComponent({
  props: {
    tmdbId: String
  },
  setup(props) {
    const { authenticated } = useAuth()
    const rating = ref<string>('5')
    const confirmation = ref()
    const { loading, error, post, data } = usePostRequest<RatingPayload, Movie>(`/account/ratings/${props.tmdbId}`)

    const onSubmit = () => {
      const ratingInt = parseInt(rating.value)
      if (!ratingInt) {
        return
      }

      post({ rating: ratingInt })
    }

    watch([data], () => {
      if (data.value?.rating) {
        confirmation.value = `Your rating of ${data.value?.rating} has been saved!`
      }
    })

    return {
      authenticated,
      rating,
      loading,
      error,
      confirmation,
      post,
      onSubmit,
    }
  },
})
</script>

<style scoped>
.reviews__form {
  margin-bottom: 24px;
}
</style>
