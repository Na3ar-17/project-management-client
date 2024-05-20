import { statisticsKeys } from '@/api/keys/statistics.keys'
import { tasksKeys } from '@/api/keys/tasks.keys'
import { tasksService } from '@/api/services/tasks.service'
import { dateFormatter } from '@/api/utils/dateFormatter'
import { ITaskCard, TypeUpdateTaskCard } from '@/types/tasks.types'
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { isMatch } from 'date-fns'
import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

export const useTask = () => {
  const queryClient = useQueryClient()
  const t = useTranslations('toast.base')

  const useCreateTask = () => {
    const { mutate: createTaskMutation } = useMutation({
      mutationKey: [tasksKeys.CREATE],
      mutationFn: (projectId: string) => tasksService.create(projectId),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [tasksKeys.GET_ALL] })
        toast.success(t('create'))
      },
    })

    return { createTaskMutation }
  }

  const useDeleteTask = () => {
    const { mutate: deleteTaskMutation } = useMutation({
      mutationKey: [tasksKeys.DELETE],
      mutationFn: ({
        projectId,
        taskId,
      }: {
        projectId: string
        taskId: string
      }) => tasksService.delete(projectId, taskId),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [tasksKeys.GET_ALL] })
        queryClient.invalidateQueries({
          queryKey: [statisticsKeys.GET_ONE],
        })
        toast.success(t('delete'))
      },
    })

    return { deleteTaskMutation }
  }

  const useGetTasks = ({ projectId }: { projectId: string }) => {
    const {
      data: tasksData,
      isFetching,
      isSuccess,
    } = useQuery({
      queryKey: [tasksKeys.GET_ALL],
      queryFn: () => tasksService.getAll(projectId),
      select: (data) => {
        const updated = data.map((el) => ({
          ...el,
          dueDate: isMatch(el.dueDate, 'dd.mm.yyyy')
            ? el.dueDate
            : dateFormatter(el.dueDate),
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

  const useUpdateTask = () => {
    const { mutate: updateTaskMutation } = useMutation({
      mutationKey: [tasksKeys.UPDATE],
      mutationFn: (dto: TypeUpdateTaskCard) => tasksService.update(dto),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [tasksKeys.GET_ALL],
        })
        queryClient.invalidateQueries({
          queryKey: [statisticsKeys.GET_ONE],
        })
        toast.success(t('update'))
      },
    })

    return { updateTaskMutation }
  }

  return {
    useCreateTask,
    useDeleteTask,
    useGetTasks,
    useUpdateTask,
  }
}
