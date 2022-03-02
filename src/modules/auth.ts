import { Ref, toRefs, reactive, computed, ComputedRef } from 'vue'
import { api } from './api'

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest extends LoginRequest {
  name: string;
}

export interface User {
  email: string;
  name: string;
  userId: string;
  token: string;
}

interface AuthHook {
  register: (email: string, password: string, name: string) => void;
  login: (email: string, password: string) => void;
  logout: () => Promise<void>;
  user: Ref<User | undefined>;
  error: Ref<string | undefined>;
  token: Ref<string | undefined>;
  authenticated: ComputedRef<boolean>;
  details: Ref<Record<string, any> | undefined>;
}

interface AuthState {
  user: User | undefined;
  error: string | undefined;
  token: string | undefined;
  details: Record<string, any> | undefined;
}

const state = reactive<AuthState>({
  user: undefined,
  token: undefined,
  error: undefined,
  details: undefined
})

export function useAuth (): AuthHook {
  const register = (email: string, password: string, name: string) => {
    api.post<RegisterRequest, User>('/auth/register', { email, password, name })
      // eslint-disable-next-line
      .then((res: any) => {
        state.error = undefined
        state.details = undefined
        state.user = res.data
        state.token = res.data.token

        Object.assign(api.defaults, { headers: { Authorization: `Bearer ${state.token}` } })
      })
      .catch(e => {
        state.error = e.response.data.message
        state.user = undefined
        state.token = undefined

        state.details = e.response.data.details
      })
  }

  const login = (email: string, password: string) => {
    api.post<LoginRequest, User>('/auth/login', { email, password })
      // eslint-disable-next-line
      .then((res: any) => {
        state.error = undefined
        state.details = undefined
        state.user = res.data
        state.token = res.data.token

        Object.assign(api.defaults, { headers: { Authorization: `Bearer ${state.token}` } })
      })
      .catch(e => {
        state.error = e.message
        state.user = undefined
        state.token = undefined
      })
  }

  const logout = (): Promise<void> => {
    return new Promise((resolve) => {
      state.user = undefined
      state.token = undefined

      // @ts-ignore
      delete api.defaults.headers?.Authorization

      resolve()
    })
  }

  const authenticated = computed(() => state.user !== undefined)

  return {
    register,
    login,
    logout,
    authenticated,
    ...toRefs(state)
  }
}
