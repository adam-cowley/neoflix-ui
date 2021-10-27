import { ref, shallowRef, Ref, watch } from 'vue'
import axios, { AxiosError } from 'axios'

export const ORDER_ASC = 'asc'
export const ORDER_DESC = 'desc'

export type Order = typeof ORDER_ASC | typeof ORDER_DESC

export const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL || '/api',
})

export interface APIResponse<T> {
  loading: Ref<boolean>;
  code: Ref<number | undefined>;
  error: Ref<string | undefined>;
  data: Ref<T | undefined>;
}

export function useGetRequest<T>(url: string): APIResponse<T> {
  const loading = ref<boolean>(true)
  const code = ref<number | undefined>()
  const error = ref<string | undefined>()
  const data = ref<T | undefined>()

  api.get(url)
    .then(res => {
      code.value = res.status
      data.value = res.data
      error.value = undefined
    })
    .catch((e: AxiosError) => {
      code.value = e.response?.status
      error.value = e.message
      data.value = undefined
    })
    .finally(() => {
      loading.value = false
    })

  return {
    loading,
    code,
    error,
    data,
  }
}

interface APIPostResponse<Req, Res> extends APIResponse<Res> {
  post: (payload: Req) => void
}

// eslint-disable-next-line
export function usePostRequest<Req extends Record<string, any>, Res>(url: string): APIPostResponse<Req, Res> {
  const loading = ref<boolean>(false)
  const code = ref<number | undefined>()
  const error = ref<string | undefined>()
  const data = ref<Res | undefined>()

  const post = (payload: Req) => {
    loading.value = true

    api.post(url, payload)
      .then(res => {
        code.value = res.status
        data.value = res.data as Res | undefined
        error.value = undefined
      })
      .catch((e: AxiosError) => {
        code.value = e.response?.status
        error.value = e.message
        data.value = undefined
      })
      .finally(() => {
        loading.value = false
      })
  }

  return {
    post,
    loading,
    code,
    error,
    data,
  }
}

interface PaginationFields<O extends string> {
  sort: Ref<O | undefined>;
  setSort: (field: O | undefined) => void;
  order: Ref<Order | undefined>;
  setOrder: (order: Order) => void;
  limit: Ref<number>,
  setLimit: (value: number) => void,
  skip: Ref<number>,
  setSkip: (value: number) => void,

  more: Ref<boolean>;
}

export function usePagination<O extends string>(defaultOrderBy: O | undefined, defaultOrder: Order | undefined, defaultLimit = 6): PaginationFields<O> {
  const sort: Ref<O | undefined> = shallowRef(defaultOrderBy)
  const setSort = (value: O | undefined) => {
    sort.value = value
  }

  const order = ref<Order | undefined>(defaultOrder)
  const setOrder = (value: Order) => { order.value = value }

  const limit = ref<number>(defaultLimit)
  const setLimit = (value: number) => { limit.value = value }

  const skip = ref<number>(0)
  const setSkip = (value: number) => { limit.value = value }

  const more = ref<boolean>(true)

  return {
    sort,
    setSort,
    order,
    setOrder,
    limit,
    setLimit,
    skip,
    setSkip,
    more,
  }
}

export interface PaginatedAPIResponse<T, O extends string> extends PaginationFields<O> {
  loading: Ref<boolean>;
  code: Ref<number | undefined>;
  error: Ref<string | undefined>;
  data: Ref<T[] | undefined>;
  loadMore: (reset: boolean) => void,
}

export function usePaginatedGetRequest<T, O extends string>(url: string, defaultOrderBy?: O | undefined, defaultOrder?: Order | undefined, defaultLimit = 6): PaginatedAPIResponse<T, O> {
  const loading = ref<boolean>(true)
  const code = ref<number | undefined>()
  const error = ref<string | undefined>()
  const data = ref<T[] | undefined>()

  const {
    sort,
    setSort,
    order,
    setOrder,
    limit,
    setLimit,
    skip,
    setSkip,
    more,
  } = usePagination<O>(defaultOrderBy, defaultOrder, defaultLimit)

  watch([sort, order], () => {
    skip.value = 0
    data.value = []
    more.value = true

    load()
  })

  const loadMore = (reset = false) => {
    skip.value = skip.value + limit.value

    if (reset === true) {
      loading.value = true
      data.value = []
    }

    load()
  }

  const load = async () => {
    const query: string[] = []

    if (sort.value !== undefined) query.push(`sort=${encodeURIComponent(sort.value as O)}`)
    if (sort.value !== undefined) query.push(`limit=${encodeURIComponent(limit.value as number)}`)
    if (skip.value !== undefined) query.push(`skip=${encodeURIComponent(skip.value as number)}`)

    let fullUrl = url

    if (query.length) {
      if (fullUrl.includes('?')) {
        fullUrl += '&'
      } else {
        fullUrl += '?'
      }

      fullUrl += query.join('&')
    }

    api.get(fullUrl)
      .then(res => {
        const newData: T[] = res.data

        if (newData.length) {
          const oldData: T[] = data.value !== undefined ? data.value : []

          data.value = oldData.concat(...newData)
        } else {
          more.value = false
        }

        code.value = res.status
        error.value = undefined
      })
      .catch((e: AxiosError) => {
        code.value = e.response?.status
        error.value = e.message
        data.value = undefined
      })
      .finally(() => {
        loading.value = false
      })
  }

  load()

  return {
    loading,
    code,
    error,
    data,
    limit,
    setLimit,
    skip,
    setSkip,
    sort,
    setSort,
    order,
    setOrder,
    more,
    loadMore,
  }
}
