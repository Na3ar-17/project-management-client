import { tasksKeys } from '@/api/keys/tasks.keys'
import { tasksService } from '@/api/services/tasks.service'
import { dateFormatter } from '@/api/utils/dateFormatter'
import { useQuery } from '@tanstack/react-query'

export const useGetTasks = (projectId: string) => {
  const {
    data: tasksData,
    isFetching,
    isSuccess,
  } = useQuery({
    queryKey: [tasksKeys.GET_ALL + projectId],
    queryFn: () => tasksService.getAll(projectId),
  })

  return { tasksData, isFetching, isSuccess }
}
