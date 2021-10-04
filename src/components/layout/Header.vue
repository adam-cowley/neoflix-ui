<template>
  <header class="header header--static" :class="menu ? 'header--menu' : ''">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="header__content">
            <button class="header__menu" :class="menu ? 'header__menu--active' : ''" type="button" @click.prevent="toggleMenu">
              <span></span>
              <span></span>
              <span></span>
            </button>

            <router-link to="/" class="header__logo">
              <svg width="38px" height="36px" viewBox="0 0 38 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Artboard-Copy-4" transform="translate(-461.000000, -92.000000)" fill="#FFFFFF" fill-rule="nonzero">
                          <g id="Neo4j-logo-white" transform="translate(461.000000, 92.000000)">
                              <path d="M15.1567882,19.7787499 C14.2593113,19.7797412 13.3869911,20.0839625 12.6739274,20.6446466 L8.12902953,17.4480446 C8.23017901,17.0744431 8.28207734,16.6885531 8.28333162,16.3007314 C8.30323173,14.5779313 7.31020034,13.0132192 5.76906756,12.3390243 C4.22793477,11.6648295 2.44364988,12.0145572 1.25142245,13.2245027 C0.0591950158,14.4344482 -0.305064777,16.2651954 0.329150182,17.859786 C0.963365141,19.4543767 2.47056054,20.4972837 4.14523019,20.5003305 C5.04296547,20.5009503 5.91577446,20.1965585 6.62809105,19.6344338 L11.1589614,22.8526832 C10.9531573,23.6053568 10.9531573,24.4018518 11.1589614,25.1545253 L6.61406359,28.3511274 C5.9055597,27.7920045 5.03816115,27.4877809 4.14523019,27.4852306 C2.47025128,27.4823124 0.958755122,28.5185053 0.316457436,30.1100122 C-0.325840249,31.7015192 0.0277521654,33.5344193 1.21214281,34.7529338 C2.39653346,35.9714483 4.17810422,36.3352281 5.72504187,35.674425 C7.27197952,35.0136219 8.27915444,33.4585776 8.27631789,31.7353403 C8.27610073,31.3526759 8.22657313,30.97173 8.12902953,30.6024588 L12.6739274,27.4058568 C13.3869911,27.9665408 14.2593113,28.2707622 15.1567882,28.2717535 C17.3222528,28.1125873 19,26.2587846 19,24.0252517 C19,21.7917188 17.3222528,19.9379161 15.1567882,19.7787499 L15.1567882,19.7787499 Z" id="Path"></path>
                              <path d="M25.5070592,0 C18.0226312,0 13,4.36522213 13,12.8334696 L13,18.871082 C13.7598872,18.496936 14.5938987,18.2983633 15.4405743,18.2899973 C16.2888621,18.2901903 17.1259465,18.4840715 17.8882228,18.8569092 L17.8882228,12.805124 C17.8882228,7.31316435 20.9159498,4.49277732 25.5282816,4.49277732 C30.1406134,4.49277732 33.1258956,7.31316435 33.1258956,12.805124 L33.1258956,26 L38,26 L38,12.805124 C38.0141184,4.28727174 32.9914872,0 25.5070592,0 Z" id="Path"></path>
                          </g>
                      </g>
                  </g>
              </svg>
            </router-link>

            <ul class="header__nav" :class="menu ? 'header__nav--active' : ''" >
              <li class="header__nav-item">
                <router-link class="header__nav-link" to="/genres">Genres</router-link>
              </li>
              <li class="header__nav-item">
                <router-link class="header__nav-link" to="/popular">Popular</router-link>
              </li>
              <li class="header__nav-item">
                <router-link class="header__nav-link" to="/latest">Latest Releases</router-link>
              </li>
              <li class="header__nav-item">
                <router-link class="header__nav-link" to="/">My List</router-link>
              </li>

              <!-- <li class="header__nav-item">
                <a
                  class="header__nav-link"
                  href="#"
                  role="button"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Home
                  <svg
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.93893 3.30334C1.08141 3.30334 0.384766 2.60669 0.384766 1.75047C0.384766 0.894254 1.08141 0.196308 1.93893 0.196308C2.79644 0.196308 3.49309 0.894254 3.49309 1.75047C3.49309 2.60669 2.79644 3.30334 1.93893 3.30334Z"
                    ></path></svg
                ></a>

                <ul
                  class="dropdown-menu header__nav-menu"
                  aria-labelledby="dropdownMenu2"
                >
                  <li><a href="index.html">Home style 1</a></li>
                  <li><a href="index2.html">Home style 2</a></li>
                  <li><a href="index3.html">Home style 3</a></li>
                </ul>
              </li>
              <li class="header__nav-item">
                <a
                  class="header__nav-link"
                  href="#"
                  role="button"
                  id="dropdownMenu1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Catalog
                  <svg
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.93893 3.30334C1.08141 3.30334 0.384766 2.60669 0.384766 1.75047C0.384766 0.894254 1.08141 0.196308 1.93893 0.196308C2.79644 0.196308 3.49309 0.894254 3.49309 1.75047C3.49309 2.60669 2.79644 3.30334 1.93893 3.30334Z"
                    ></path></svg
                ></a>

                <ul
                  class="dropdown-menu header__nav-menu"
                  aria-labelledby="dropdownMenu1"
                >
                  <li><a href="catalog.html">Catalog</a></li>
                  <li class="dropdown-submenu">
                    <a
                      class="dropdown-item"
                      href="#"
                      role="button"
                      id="dropdownMenuSub"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      >Catalog dropdown
                      <svg
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.93893 3.30334C1.08141 3.30334 0.384766 2.60669 0.384766 1.75047C0.384766 0.894254 1.08141 0.196308 1.93893 0.196308C2.79644 0.196308 3.49309 0.894254 3.49309 1.75047C3.49309 2.60669 2.79644 3.30334 1.93893 3.30334Z"
                        ></path></svg
                    ></a>

                    <ul
                      class="dropdown-menu header__nav-menu"
                      aria-labelledby="dropdownMenuSub"
                    >
                      <li><a href="category.html">Actions</a></li>
                      <li><a href="category.html">Biography</a></li>
                      <li><a href="category.html">Documentary</a></li>
                      <li><a href="category.html">Horror</a></li>
                    </ul>
                  </li>
                  <li><a href="category.html">Category style 1</a></li>
                  <li><a href="category2.html">Category style 2</a></li>
                  <li><a href="details.html">Details style 1</a></li>
                  <li><a href="details2.html">Details style 2</a></li>
                  <li><a href="details3.html">Details style 3</a></li>
                </ul>
              </li>
              <li class="header__nav-item">
                <a class="header__nav-link" href="pricing.html"
                  >Pricing plans</a
                >
              </li>
              <li class="header__nav-item">
                <a
                  class="header__nav-link header__nav-link--live"
                  href="live.html"
                  >LIVE<svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="6"
                      cy="4"
                      r="4"
                      fill="#EB5757"
                      fill-opacity="0.5"
                    ></circle>
                    <g filter="url(#filter0_d)">
                      <circle cx="6" cy="4" r="2" fill="#EB5757"></circle>
                    </g>
                    <defs>
                      <filter
                        id="filter0_d"
                        x="0"
                        y="0"
                        width="12"
                        height="12"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feOffset dy="2"></feOffset>
                        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                        ></feColorMatrix>
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        ></feBlend>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow"
                          result="shape"
                        ></feBlend>
                      </filter>
                    </defs></svg
                ></a>
              </li>
              <li class="header__nav-item">
                <a
                  class="header__nav-link header__nav-link--more"
                  href="#"
                  role="button"
                  id="dropdownMenu3"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.93893 14.3033C6.08141 14.3033 5.38477 13.6067 5.38477 12.7505C5.38477 11.8943 6.08141 11.1963 6.93893 11.1963C7.79644 11.1963 8.49309 11.8943 8.49309 12.7505C8.49309 13.6067 7.79644 14.3033 6.93893 14.3033Z"
                    ></path>
                    <path
                      d="M12.7501 14.3033C11.8926 14.3033 11.1959 13.6067 11.1959 12.7505C11.1959 11.8943 11.8926 11.1963 12.7501 11.1963C13.6076 11.1963 14.3042 11.8943 14.3042 12.7505C14.3042 13.6067 13.6076 14.3033 12.7501 14.3033Z"
                    ></path>
                    <path
                      d="M18.5608 14.3033C17.7032 14.3033 17.0066 13.6067 17.0066 12.7505C17.0066 11.8943 17.7032 11.1963 18.5608 11.1963C19.4183 11.1963 20.1149 11.8943 20.1149 12.7505C20.1149 13.6067 19.4183 14.3033 18.5608 14.3033Z"
                    ></path>
                  </svg>
                </a>

                <ul
                  class="
                    dropdown-menu
                    header__nav-menu header__nav-menu--scroll
                  "
                  aria-labelledby="dropdownMenu3"
                  data-scrollbar="true"
                  tabindex="-1"
                  style="overflow: hidden; outline: none"
                >
                  <div class="scroll-content">
                    <li><a href="about.html">About us</a></li>
                    <li><a href="profile.html">Profile</a></li>
                    <li><a href="contacts.html">Contacts</a></li>
                    <li><a href="interview.html">Interview</a></li>
                    <li>
                      <a href="../admin/index.html" target="_blank"
                        >Admin pages</a
                      >
                    </li>
                    <li><a href="privacy.html">Privacy policy</a></li>
                    <li><a href="signin.html">Sign in</a></li>
                    <li><a href="signup.html">Sign up</a></li>
                    <li><a href="forgot.html">Forgot password</a></li>
                    <li><a href="404.html">404 Page</a></li>
                  </div>
                  <div
                    class="scrollbar-track scrollbar-track-x show"
                    style="display: none"
                  >
                    <div
                      class="scrollbar-thumb scrollbar-thumb-x"
                      style="
                        width: 200px;
                        transform: translate3d(0px, 0px, 0px);
                      "
                    ></div>
                  </div>
                  <div
                    class="scrollbar-track scrollbar-track-y show"
                    style="display: block"
                  >
                    <div
                      class="scrollbar-thumb scrollbar-thumb-y"
                      style="
                        height: 149.61px;
                        transform: translate3d(0px, 0px, 0px);
                      "
                    ></div>
                  </div>
                </ul>
              </li> -->
            </ul>

            <div class="header__actions">
              <!-- <form action="#" class="header__form">
                <input
                  class="header__form-input"
                  type="text"
                  placeholder="I'm looking for..."
                />
                <button class="header__form-btn" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
                    ></path>
                  </svg>
                </button>
                <button type="button" class="header__form-close">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.3345 0.000183105H5.66549C2.26791 0.000183105 0.000488281 2.43278 0.000488281 5.91618V14.0842C0.000488281 17.5709 2.26186 20.0002 5.66549 20.0002H14.3335C17.7381 20.0002 20.0005 17.5709 20.0005 14.0842V5.91618C20.0005 2.42969 17.7383 0.000183105 14.3345 0.000183105ZM5.66549 1.50018H14.3345C16.885 1.50018 18.5005 3.23515 18.5005 5.91618V14.0842C18.5005 16.7653 16.8849 18.5002 14.3335 18.5002H5.66549C3.11525 18.5002 1.50049 16.7655 1.50049 14.0842V5.91618C1.50049 3.23856 3.12083 1.50018 5.66549 1.50018ZM7.07071 7.0624C7.33701 6.79616 7.75367 6.772 8.04726 6.98988L8.13137 7.06251L9.99909 8.93062L11.8652 7.06455C12.1581 6.77166 12.6329 6.77166 12.9258 7.06455C13.1921 7.33082 13.2163 7.74748 12.9984 8.04109L12.9258 8.12521L11.0596 9.99139L12.9274 11.8595C13.2202 12.1524 13.2202 12.6273 12.9273 12.9202C12.661 13.1864 12.2443 13.2106 11.9507 12.9927L11.8666 12.9201L9.99898 11.052L8.13382 12.9172C7.84093 13.2101 7.36605 13.2101 7.07316 12.9172C6.80689 12.6509 6.78269 12.2343 7.00054 11.9407L7.07316 11.8566L8.93843 9.99128L7.0706 8.12306C6.77774 7.83013 6.77779 7.35526 7.07071 7.0624Z"
                    ></path>
                  </svg>
                </button>
              </form> -->

              <!-- <button class="header__search" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
                  ></path>
                </svg>
              </button> -->

              <router-link to="/login" class="header__user">
                <span>Sign in</span>
              </router-link>

              <router-link to="/register" class="header__register">
                <span>Register</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  data: () => ({
    menu: false
  }),
  methods: {
    toggleMenu () {
      this.menu = !this.menu
    }
  }
})
</script>

<style scoped>
.header__register {
  font-size: 14px;
  color: #e0e0e0;
  border-left: 1px solid #e0e0e0;
  padding-left: 8px;
}
.header__register:hover {
  color: #2f80ed;
}
</style>
