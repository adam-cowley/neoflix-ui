import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

import './assets/css/bootstrap-grid.min.css'
import './assets/css/bootstrap-reboot.min.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/main.css'

createApp(App)
  // .use(store)
  .use(router).mount('#app')
