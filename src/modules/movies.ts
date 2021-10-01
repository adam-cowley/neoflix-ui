/* eslint-disable */
import { latest, popular } from '@/mock/movies';
import { ref } from 'vue'

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
  }, 1000)

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
  }, 1000)

  const movies: Movie[] = latest

  return {
    loading,
    movies,
  }
}
