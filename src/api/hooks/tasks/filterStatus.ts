import { EnumTaskStatus } from '@/types/tasks.types'

export const filterStatus = (value: string) => {
  switch (value) {
    case 'completed':
      return EnumTaskStatus.completed
    case 'inQueue':
      return EnumTaskStatus.inQueue
    case 'onProgress':
      return EnumTaskStatus.onProgress
    case 'testing':
      return EnumTaskStatus.testing

    default:
      break
  }
}
