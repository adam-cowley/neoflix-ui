import { reactive, Ref, toRefs } from 'vue'

export const NOTIFICATION_SUCCESS = 'success'
export const NOTIFICATION_ERROR = 'error'

type NotificationType = typeof NOTIFICATION_SUCCESS | typeof NOTIFICATION_ERROR

interface NotificationHook {
  message: Ref<string | undefined>;
  type: Ref<NotificationType | undefined>;
  setNotification: (type: NotificationType, message: string) => void;
  closeNotification: () => void;
}

interface NotificationState {
  type: NotificationType | undefined;
  message: string | undefined;
}

const state = reactive<NotificationState>({
  message: undefined,
  type: undefined,
})
export function useNotification(): NotificationHook {
  const setNotification = (type: NotificationType, message: string) => {
    state.type = type
    state.message = message

    setTimeout(() => closeNotification(), 2000)
  }

  const closeNotification = () => {
    state.type = undefined
    state.message = undefined
  }

  return {
    setNotification,
    closeNotification,
    ...toRefs(state),
  }
}
