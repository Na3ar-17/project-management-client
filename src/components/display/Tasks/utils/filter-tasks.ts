import { EnumTaskStatus, ITaskCard } from '@/types/tasks.types'

export const filterTasks = (
  tasks: ITaskCard[] | undefined,
  value: EnumTaskStatus
) => {
  return tasks?.filter((task) => task.status === value)
}
