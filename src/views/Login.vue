<template>
  <form-wrapper
    :error="error"
    :details="details"
    buttonText="Sign In"
    :onSubmit="onSubmit"
  >
    <div class="sign__group">
      <input
        v-model="email"
        type="text"
        class="sign__input"
        placeholder="Email"
      />
    </div>

    <div class="sign__group">
      <input
        v-model="password"
        type="password"
        class="sign__input"
        placeholder="Password"
      />
    </div>
    <template v-slot:footer>
      <span class="sign__text"
        >Don't have an account?
        <router-link to="/register">Register now</router-link></span
      >
    </template>
  </form-wrapper>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue'
import { LoginRequest, useAuth } from '@/modules/auth'
import { useRouter } from 'vue-router'

import FormWrapper from '@/components/ui/form/FormWrapper.vue'

export default defineComponent({
  setup() {
    const { user, error, login } = useAuth()
    const { push } = useRouter()

    const state = reactive<LoginRequest>({
      email: '',
      password: '',
    })

    const onSubmit = () => {
      login(state.email, state.password)
    }

    // If logged in, redirect to home page
    watch([user], () => {
      if (user.value) {
        push({ name: 'Home' })
      }
    })

    return {
      user,
      error,
      onSubmit,
      ...toRefs(state),
    }
  },
  components: {
    FormWrapper,
  },
})
</script>

<style scoped>
.error {
  padding: 1rem;
  flex-wrap: wrap;
}
</style>
