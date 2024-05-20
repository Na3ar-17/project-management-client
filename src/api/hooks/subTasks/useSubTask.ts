import { subTasksKeys } from '@/api/keys/subTasks.keys'
import { tasksKeys } from '@/api/keys/tasks.keys'
import { subTasksService } from '@/api/services/subTasks.service'
import {
  TypeCreateSubTask,
  ISubTask,
  TypeUpdateSubTask,
} from '@/types/tasks.types'
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

export const useSubTask = () => {
  const queryClient = useQueryClient()
  const t = useTranslations('toast.base')

  const useCreateSubTask = () => {
    const { mutate: createSubTaskMutation } = useMutation({
      mutationKey: [subTasksKeys.CREATE],
      mutationFn: (dto: TypeCreateSubTask) => subTasksService.create(dto),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [subTasksKeys.GET_ALL] })
        queryClient.invalidateQueries({
          queryKey: [tasksKeys.GET_ALL],
        })
      },
    })

    return { createSubTaskMutation }
  }

  const useDeleteSubTask = () => {
    const { mutate: deleteSubtaskMutation } = useMutation({
      mutationKey: [subTasksKeys.DELETE],
      mutationFn: ({ taskId, id }: { taskId: string; id: string }) =>
        subTasksService.delete({ taskId, id }),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [subTasksKeys.GET_ALL] })
        queryClient.invalidateQueries({
          queryKey: [tasksKeys.GET_ALL],
        })
        toast.success(t('delete'))
      },
    })

    return { deleteSubtaskMutation }
  }

  const useGetAll = (taskId: string) => {
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

  const useUpdateSubTask = () => {
    const { mutate: updateSubTakMutation } = useMutation({
      mutationKey: [subTasksKeys.UPDATE],
      mutationFn: (dto: TypeUpdateSubTask) => subTasksService.update(dto),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [subTasksKeys.GET_ALL],
        })
        queryClient.invalidateQueries({
          queryKey: [tasksKeys.GET_ALL],
        })
        toast.success(t('update'))
      },
    })

    return { updateSubTakMutation }
  }
  return { useUpdateSubTask, useGetAll, useDeleteSubTask, useCreateSubTask }
}
