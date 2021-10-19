<template>
  <div>Please wait&hellip;</div>
</template>
<script lang="ts">
import { useAuth } from '@/modules/auth'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const { logout } = useAuth()
    const { push } = useRouter()

    logout()
      .then(() => {
        push({ name: 'Home' })
      })
  },
})
</script>
