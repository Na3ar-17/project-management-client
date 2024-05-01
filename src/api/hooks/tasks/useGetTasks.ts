import { tasksKeys } from '@/api/keys/tasks.keys'
import { tasksService } from '@/api/services/tasks.service'
import { dateFormatter } from '@/api/utils/dateFormatter'
import { ITaskCard } from '@/types/tasks.types'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export const useGetTasks = (projectId: string) => {
  const {
    data: tasksData,
    isFetching,
    isSuccess,
  } = useQuery({
    queryKey: [tasksKeys.GET_ALL + projectId],
    queryFn: () => tasksService.getAll(projectId),
    select: (data) => {
      const updated = data.map((el) => ({
        ...el,
        dueDate: dateFormatter(el.dueDate),
      }))

      return updated
    },
  })

  const [tasksState, setTasksState] = useState<ITaskCard[] | undefined>(
    tasksData
  )

  useEffect(() => {
    setTasksState(tasksData)
  }, [tasksData])

  return { tasksData, isFetching, isSuccess, tasksState, setTasksState }
}
