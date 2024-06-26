import { tasksKeys } from '@/api/keys/tasks.keys'
import { tasksService } from '@/api/services/tasks.service'
import { dateFormatter } from '@/api/utils/dateFormatter'
import { useSheet } from '@/zustand/useSheet'
import { useQuery } from '@tanstack/react-query'

export const useGetOneTask = (projectId: string, taskId: string) => {
  const {
    data: taskData,
    isSuccess,
    isFetching,
  } = useQuery({
    queryKey: [tasksKeys.GET_ONE + taskId],
    queryFn: () => tasksService.getOne(projectId, taskId),
    select: (data) => {
      return {
        ...data,
        dueDate: dateFormatter(data.dueDate),
      }
    },
    enabled: taskId !== '',
  })

  return {
    taskData,
    isSuccess,
    isFetching,
  }
}
