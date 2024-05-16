import { projectKeys } from '@/api/keys/project.keys'
import { projectService } from '@/api/services/project.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import toast from 'react-hot-toast'

export const useCreateProject = () => {
  const queryClient = useQueryClient()
  const t = useTranslations('toast.projects')

  const { mutate: createProjectMutation } = useMutation({
    mutationKey: [projectKeys.CREATE],
    mutationFn: () => projectService.create(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [projectKeys.GET_ALL] })
      toast.success(t('create'))
    },
  })

  return { createProjectMutation }
}
