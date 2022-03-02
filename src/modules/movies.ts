import { APIResponse, Order, ORDER_DESC, PaginatedAPIResponse, useGetRequest, usePaginatedGetRequest } from './api'

interface Person {
  id: string;
  name: string;
}

interface Genre {
  link: string;
  name: string;
}

export interface Movie {
  tmdbId: string;
  imdbId: string;
  title: string;
  plot: string;
  year: number;
  rating: number;
  imdbRating: number;
  runtime?: string | number;
  languages: string[];
  poster: string;
  genres: Genre[];
  actors: Person[];
  directors: Person[];
  favorite?: boolean;
}

export const ORDER_BY_TITLE = 'title'
export const ORDER_BY_RATING = 'imdbRating'
export const ORDER_BY_RELEASE = 'released'
export const ORDER_BY_SCORE = 'score'

export const MOVIE_ORDER = [
  { label: 'Title', value: ORDER_BY_TITLE },
  { label: 'Rating', value: ORDER_BY_RATING },
  { label: 'Release Date', value: ORDER_BY_RELEASE }
]

export type MovieOrderBy = typeof ORDER_BY_TITLE | typeof ORDER_BY_RATING | typeof ORDER_BY_RELEASE

export function useMovieList (sort: string, order: Order, limit = 6): PaginatedAPIResponse<Movie, MovieOrderBy> {
  return usePaginatedGetRequest<Movie, MovieOrderBy>(`/movies?sort=${sort}&order=${order}&limit=${limit}`)
}

export function useMoviesByGenre (genre: string): PaginatedAPIResponse<Movie, MovieOrderBy> {
  return usePaginatedGetRequest<Movie, MovieOrderBy>(`/genres/${genre}/movies`, ORDER_BY_TITLE)
}

export function useMovie (id: string): APIResponse<Movie> {
  return useGetRequest<Movie>(`/movies/${id}`)
}

interface SimilarMovie extends Movie {
  score: number;
}

export function useSimilarMovies (id: string): PaginatedAPIResponse<SimilarMovie, typeof ORDER_BY_SCORE> {
  return usePaginatedGetRequest<SimilarMovie, typeof ORDER_BY_SCORE>(`/movies/${id}/similar`, ORDER_BY_SCORE)
}

interface User {
  id: string;
  name: string;
}

interface Rating {
  rating: number;
  timestamp: number;
  user: User;
}

const ORDER_BY_TIMESTAMP = 'timestamp'
const ORDER_BY_RATING_SCORE = 'rating'

type RatingOrderBy = typeof ORDER_BY_TIMESTAMP | typeof ORDER_BY_RATING_SCORE

export function useMovieRatings (id: string, limit: number): PaginatedAPIResponse<Rating, RatingOrderBy> {
  return usePaginatedGetRequest<Rating, RatingOrderBy>(`/movies/${id}/ratings`, ORDER_BY_TIMESTAMP, ORDER_DESC, limit)
}

export function useMoviesByActor (id: string): PaginatedAPIResponse<Movie, MovieOrderBy> {
  return usePaginatedGetRequest<Movie, MovieOrderBy>(`/people/${id}/acted`, ORDER_BY_TITLE)
}

export function useMoviesByDirector (id: string): PaginatedAPIResponse<Movie, MovieOrderBy> {
  return usePaginatedGetRequest<Movie, MovieOrderBy>(`/people/${id}/directed`, ORDER_BY_TITLE)
}
