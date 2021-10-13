import { APIResponse, useGetRequest } from './api'

interface Genre {
  name: string;
  link: string;
  movies: number;
  poster: string;
}

export function useGenres(): APIResponse<Genre[]> {
  return useGetRequest<Genre[]>('/genres')
}

export function useGenre(name: string): APIResponse<Genre> {
  return useGetRequest<Genre>(`/genres/${name}`)
}
