import { subTasksKeys } from '@/api/keys/subTasks.keys'
import { subTasksService } from '@/api/services/subTasks.service'
import { useQuery } from '@tanstack/react-query'

export const useGetAll = (taskId: string) => {
  return useQuery({
    queryKey: [subTasksKeys.GET_ALL],
    queryFn: () => subTasksService.getAll(taskId),
  })
}