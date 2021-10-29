import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import(/* webpackChunkName: "logout" */ '../views/Logout.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/genres',
    name: 'GenreList',
    component: () => import(/* webpackChunkName: "genres.list" */ '../views/GenreList.vue')
  },
  {
    path: '/genres/:name',
    name: 'GenreView',
    component: () => import(/* webpackChunkName: "genres.view" */ '../views/GenreView.vue')
  },
  {
    path: '/people',
    name: 'PeopleList',
    component: () => import(/* webpackChunkName: "people.list" */ '../views/PeopleList.vue')
  },
  {
    path: '/people/:tmdbId',
    name: 'PersonView',
    component: () => import(/* webpackChunkName: "people.view" */ '../views/PersonView.vue')
  },
  {
    path: '/movies/:tmdbId',
    name: 'MovieView',
    component: () => import(/* webpackChunkName: "movie.view" */ '../views/MovieView.vue')
  },
  {
    path: '/latest',
    name: 'LatestMovies',
    component: () => import(/* webpackChunkName: "movies.latest" */ '../views/MovieList.vue')
  },
  {
    path: '/popular',
    name: 'PopularMovies',
    component: () => import(/* webpackChunkName: "movies.popular" */ '../views/MovieList.vue')
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import(/* webpackChunkName: "favorites" */ '../views/Favorites.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'Home' },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
