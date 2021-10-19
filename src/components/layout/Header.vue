<template>
  <header class="header header--static" :class="menu ? 'header--menu' : ''">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="header__content">
            <button
              class="header__menu"
              :class="menu ? 'header__menu--active' : ''"
              type="button"
              @click.prevent="toggleMenu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <router-link :to="{ name: 'Home' }" class="header__logo">
              <svg
                width="38px"
                height="36px"
                viewBox="0 0 38 36"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Artboard-Copy-4"
                    transform="translate(-461.000000, -92.000000)"
                    fill="#FFFFFF"
                    fill-rule="nonzero"
                  >
                    <g
                      id="Neo4j-logo-white"
                      transform="translate(461.000000, 92.000000)"
                    >
                      <path
                        d="M15.1567882,19.7787499 C14.2593113,19.7797412 13.3869911,20.0839625 12.6739274,20.6446466 L8.12902953,17.4480446 C8.23017901,17.0744431 8.28207734,16.6885531 8.28333162,16.3007314 C8.30323173,14.5779313 7.31020034,13.0132192 5.76906756,12.3390243 C4.22793477,11.6648295 2.44364988,12.0145572 1.25142245,13.2245027 C0.0591950158,14.4344482 -0.305064777,16.2651954 0.329150182,17.859786 C0.963365141,19.4543767 2.47056054,20.4972837 4.14523019,20.5003305 C5.04296547,20.5009503 5.91577446,20.1965585 6.62809105,19.6344338 L11.1589614,22.8526832 C10.9531573,23.6053568 10.9531573,24.4018518 11.1589614,25.1545253 L6.61406359,28.3511274 C5.9055597,27.7920045 5.03816115,27.4877809 4.14523019,27.4852306 C2.47025128,27.4823124 0.958755122,28.5185053 0.316457436,30.1100122 C-0.325840249,31.7015192 0.0277521654,33.5344193 1.21214281,34.7529338 C2.39653346,35.9714483 4.17810422,36.3352281 5.72504187,35.674425 C7.27197952,35.0136219 8.27915444,33.4585776 8.27631789,31.7353403 C8.27610073,31.3526759 8.22657313,30.97173 8.12902953,30.6024588 L12.6739274,27.4058568 C13.3869911,27.9665408 14.2593113,28.2707622 15.1567882,28.2717535 C17.3222528,28.1125873 19,26.2587846 19,24.0252517 C19,21.7917188 17.3222528,19.9379161 15.1567882,19.7787499 L15.1567882,19.7787499 Z"
                        id="Path"
                      ></path>
                      <path
                        d="M25.5070592,0 C18.0226312,0 13,4.36522213 13,12.8334696 L13,18.871082 C13.7598872,18.496936 14.5938987,18.2983633 15.4405743,18.2899973 C16.2888621,18.2901903 17.1259465,18.4840715 17.8882228,18.8569092 L17.8882228,12.805124 C17.8882228,7.31316435 20.9159498,4.49277732 25.5282816,4.49277732 C30.1406134,4.49277732 33.1258956,7.31316435 33.1258956,12.805124 L33.1258956,26 L38,26 L38,12.805124 C38.0141184,4.28727174 32.9914872,0 25.5070592,0 Z"
                        id="Path"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </router-link>

            <ul class="header__nav" :class="menu ? 'header__nav--active' : ''">
              <li class="header__nav-item">
                <router-link
                  class="header__nav-link"
                  :to="{ name: 'GenreList' }"
                  >Genres</router-link
                >
              </li>
              <li class="header__nav-item">
                <router-link
                  class="header__nav-link"
                  :to="{ name: 'PopularMovies' }"
                  >Popular</router-link
                >
              </li>
              <li class="header__nav-item">
                <router-link
                  class="header__nav-link"
                  :to="{ name: 'LatestMovies' }"
                  >Latest Releases</router-link
                >
              </li>
              <li class="header__nav-item">
                <router-link class="header__nav-link" :to="{ name: 'Home' }"
                  >My List</router-link
                >
              </li>
            </ul>

            <div class="header__actions" v-if="!user">
              <router-link :to="{ name: 'Login' }" class="header__user">
                <span>Sign in</span>
              </router-link>

              <router-link :to="{ name: 'Register' }" class="header__register">
                <span>Register</span>
              </router-link>
            </div>
            <div class="header__actions" v-else>
              <router-link :to="{ name: 'Home' }" class="header__user">
                <span>{{ greeting }}</span>
              </router-link>
              <router-link :to="{ name: 'Logout' }" class="header__register">
                <span>Sign Out</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useAuth } from '@/modules/auth'

export default defineComponent({
  name: 'Header',
  setup() {
    const { user } = useAuth()

    const menu = ref<boolean>(false)
    const toggleMenu = () => {
      menu.value = !menu.value
    }

    const greeting = computed(() => {
      let output = 'Welcome back'

      if (user.value?.name !== undefined) {
        output += `, ${user.value?.name}`
      }

      return `${output}!`
    })

    return {
      menu,
      toggleMenu,
      user,
      greeting,
    }
  },
})
</script>

<style scoped>
.header__register {
  font-size: 14px;
  color: #e0e0e0;
  border-left: 1px solid #e0e0e0;
  padding-left: 12px;
  margin-left: 6px;
}
.header__register:hover {
  color: #2f80ed;
}
</style>
