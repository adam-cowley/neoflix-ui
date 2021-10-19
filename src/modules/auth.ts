import { Ref, toRefs, reactive } from 'vue'
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
}

interface AuthState {
  user: User | undefined;
  error: string | undefined;
  token: string | undefined;
}

const state = reactive<AuthState>({
  user: undefined,
  token: undefined,
  error: undefined,
})

export function useAuth(): AuthHook {
  const register = (email: string, password: string, name: string) => {
    api.post<RegisterRequest, User>('/auth/register', { email, password, name })
      // eslint-disable-next-line
      .then((res: any) => {
        state.error = undefined
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

  const login = (email: string, password: string) => {
    api.post<LoginRequest, User>('/auth/login', { email, password })
      // eslint-disable-next-line
      .then((res: any) => {
        state.error = undefined
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

      Object.assign(api.defaults, { headers: { Authorization: undefined } })

      resolve()
    })
  }

  return {
    register,
    login,
    logout,
    ...toRefs(state),
  }
}
