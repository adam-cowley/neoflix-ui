<template>
  <div class="notification modal" :class="[`notification__${type}`]" v-if="message">
    <button class="modal__close" @click.prevent="closeNotification">
      <svg width="14px" height="22px" viewBox="0 0 22 22" role="button" class="close" aria-label="Close"><line x1="19.5833333" y1="0.416666667" x2="0.416666667" y2="19.5833333"></line><line x1="19.5833333" y1="19.5833333" x2="0.416666667" y2="0.416666667"></line></svg>
    </button>
    <h2 class="modal__overline">{{type}}</h2>
    <p class="modal__text" v-html="message" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useNotification } from '@/modules/notification'

export default defineComponent({
  setup() {
    const { message, type, closeNotification } = useNotification()

    return {
      message,
      type,
      closeNotification,
    }
  },
})
</script>

<style scoped>
.notification {
  background: #151f30;
  position: fixed;
  bottom: 16px;
  right: 16px;
  padding: 16px;
  z-index: 5000;
}

.notification__success {
  border-color: #29b474;
}
.notification__success .modal__overline {
  border-color: #29b474;
}

.notification p {
  margin-bottom: 0;
  font-size: 14px;
}
.modal__overline {
  font-size: 12px;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(255, 255, 255, .4);
  padding: 0 0 8px;
  opacity: .6;
  margin-bottom: 16px;

}
.modal__close {
  position: absolute;
  top: 10px;
  right: 12px;
  z-index: 5000;
}
.modal svg {
  stroke: white;
  height: 12px;
  cursor: pointer;
}
</style>
