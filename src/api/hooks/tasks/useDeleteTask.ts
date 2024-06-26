import { statisticsKeys } from '@/api/keys/statistics.keys'
import { tasksKeys } from '@/api/keys/tasks.keys'
import { tasksService } from '@/api/services/tasks.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import toast from 'react-hot-toast'

export const useDeleteTask = () => {
  const queryClient = useQueryClient()
  const t = useTranslations('toast.base')

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
