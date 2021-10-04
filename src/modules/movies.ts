/* eslint-disable */
import { goodfellas, latest, popular } from '@/mock/movies';
import { ref, Ref } from 'vue'

interface Person {
  id: string;
  name: string;
}

interface Genre {
  link: string;
  name: string;
}

interface Movie {
  id: string;
  title: string;
  plot: string;
  year: number;
  rating: number;
  languages: string[];
  poster: string;
  genres: Genre[];
  actors: Person[];
  directors: Person[];
}


export function usePopularMovies() {
  const loading = ref(true)

  setTimeout(() => {
    loading.value = false
  }, Math.random() * 100)

  const movies: Movie[] = popular

  return {
    loading,
    movies,
  }
}

export function useLatestMovies() {
  const loading = ref(true)

  setTimeout(() => {
    loading.value = false
  }, Math.random() * 100)

  const movies: Movie[] = latest

  return {
    loading,
    movies,
  }
}

export const ORDER_BY_TITLE = 'title'
export const ORDER_BY_RATING = 'imdbRating'
export const ORDER_BY_RELEASE = 'releaseDate'

export const MOVIE_ORDER = [
  { label: 'Title', value: ORDER_BY_TITLE },
  { label: 'Rating', value: ORDER_BY_RATING },
  { label: 'Release Date', value: ORDER_BY_RELEASE },
]

type OrderBy = typeof ORDER_BY_TITLE | typeof ORDER_BY_RATING | typeof ORDER_BY_RELEASE

export function useMoviesByGenre(genre: string, orderBy: OrderBy, limit: number, skip: number): { loading: Ref<boolean>, movies: Ref<Movie[]> } {
  const loading = ref(true)
  const movies: Ref<Movie[]> = ref<Movie[]>([])

  setTimeout(async () => {
    movies.value = await getMoviesByGenre(genre, orderBy, limit, skip)

    loading.value = false
  }, Math.random() * 1000)

  return {
    loading,
    movies,
  }
}

export async function getMoviesByGenre(genre: string, orderBy: OrderBy, limit: number, skip: number): Promise<Movie[]> {
  if ( orderBy === ORDER_BY_TITLE ) return Promise.resolve(latest)
  if ( orderBy === ORDER_BY_RATING ) return Promise.resolve(popular)

  return Promise.resolve([ goodfellas as Movie ]) as Promise<Movie[]>
}