<template>
  <form-wrapper
    :error="error"
    :details="details"
    buttonText="Register"
    :onSubmit="onSubmit"
  >
    <div class="sign__group">
      <input
        v-model="name"
        type="text"
        class="sign__input"
        :class="{ error: details && details.name }"
        placeholder="Your Name"
      />
    </div>

    <div class="sign__group">
      <input
        v-model="email"
        type="text"
        class="sign__input"
        :class="{ error: details && details.email }"
        placeholder="Email"
      />
    </div>

    <div class="sign__group">
      <input
        v-model="password"
        type="password"
        class="sign__input"
        :class="{ error: details && details.password }"
        placeholder="Password"
      />
    </div>

    <template v-slot:footer>
      <span class="sign__text"
        >Already have an account?
        <router-link to="/login">Sign In</router-link></span
      >
    </template>
  </form-wrapper>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue'
import { RegisterRequest, useAuth } from '@/modules/auth'
import { useRouter } from 'vue-router'

import FormWrapper from '@/components/ui/form/FormWrapper.vue'

export default defineComponent({
  setup () {
    const { user, error, details, register } = useAuth()
    const { push } = useRouter()

    const state = reactive<RegisterRequest>({
      email: '',
      password: '',
      name: ''
    })

    const onSubmit = () => {
      register(state.email, state.password, state.name)
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
      details,
      onSubmit,
      ...toRefs(state)
    }
  },
  components: {
    FormWrapper
  }
})
</script>
