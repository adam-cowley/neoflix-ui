import { APIResponse, PaginatedAPIResponse, useGetRequest, usePaginatedGetRequest } from './api'

interface Person {
  bornIn: string;
  born: number;
  died: number;
  tmdbId: string;
  imdbId: string;
  name: string;
  url: string;
  bio: string;
  poster: string;
  directedCount: 2,
  actedCount: 3,
}

export const ORDER_BY_NAME = 'name'
export const ORDER_BY_BORN = 'born'
export const ORDER_BY_MOVIE_COUNT = 'movieCount'

export const PERSON_ORDER = [
  { value: ORDER_BY_NAME, label: 'Name' },
  { value: ORDER_BY_BORN, label: 'Age' },
  { value: ORDER_BY_MOVIE_COUNT, label: 'Movies' },
]

export type PersonOrderBy = typeof ORDER_BY_NAME | typeof ORDER_BY_BORN | typeof ORDER_BY_MOVIE_COUNT

export function usePeople(): PaginatedAPIResponse<Person, PersonOrderBy> {
  return usePaginatedGetRequest<Person, PersonOrderBy>('/people')
}

export function usePerson(id: string): APIResponse<Person> {
  return useGetRequest(`/people/${id}`)
}

export function useSimilarPeople(id: string): APIResponse<Person[]> {
  return useGetRequest(`/people/${id}/similar`)
}
