import { ref, Ref } from 'vue'
import { genres } from '@/mock/genres'

interface Genre {
  name: string;
  link: string;
  movies: number;
  poster: string;
}

export function useGenres(): { loading: Ref, genres: Ref<Genre[]> } {
  const loading = ref(true)
  const loadedGenres = ref(genres)

  setTimeout(() => {
    loading.value = false
  }, 1000)

  return {
    loading,
    genres: loadedGenres,
  }
}

export function useGenre(name: string): { loading: Ref, genre: Ref<Genre | undefined> } {
  const loading = ref(true)
  const genre = ref(genres.find(genre => genre.name === name))

  setTimeout(() => {
    loading.value = false
  }, 1000)

  return {
    loading,
    genre,
  }
}
