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
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import(/* webpackChunkName: "about" */ '../views/Logout.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/genres',
    name: 'GenreList',
    component: () => import(/* webpackChunkName: "about" */ '../views/GenreList.vue')
  },
  {
    path: '/genres/:name',
    name: 'GenreView',
    component: () => import(/* webpackChunkName: "about" */ '../views/GenreView.vue')
  },
  {
    path: '/movies/:id',
    name: 'MovieView',
    component: () => import(/* webpackChunkName: "about" */ '../views/MovieView.vue')
  },
  {
    path: '/latest',
    name: 'LatestMovies',
    component: () => import(/* webpackChunkName: "about" */ '../views/MovieList.vue')
  },
  {
    path: '/popular',
    name: 'PopularMovies',
    component: () => import(/* webpackChunkName: "about" */ '../views/MovieList.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
