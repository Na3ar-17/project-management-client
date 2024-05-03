import { subTasksKeys } from '@/api/keys/subTasks.keys'
import { subTasksService } from '@/api/services/subTasks.service'
import { ISubTask } from '@/types/tasks.types'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export const useGetAll = (taskId: string) => {
  const { data, isSuccess, isFetching } = useQuery({
    queryKey: [subTasksKeys.GET_ALL],
    queryFn: () => subTasksService.getAll(taskId),
  })

  const [subtaskData, setSubtaskData] = useState<ISubTask[] | undefined>(
    undefined
  )

  useEffect(() => {
    if (data) {
      setSubtaskData(data)
    }
  }, [data])

  return {
    subtaskData,
    isSuccess,
    isFetching,
    setSubtaskData,
  }
}
