import { tasksKeys } from '@/api/keys/tasks.keys'
import { tasksService } from '@/api/services/tasks.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import toast from 'react-hot-toast'

export const useCreateTask = () => {
  const queryClient = useQueryClient()
  const t = useTranslations('toast.base')

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
