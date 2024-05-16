import { projectKeys } from '@/api/keys/project.keys'
import { projectService } from '@/api/services/project.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import toast from 'react-hot-toast'

export const useDeleteProject = () => {
  const queryClient = useQueryClient()
  const t = useTranslations('toast.projects')

  const { mutate: deleteProjectMutation } = useMutation({
    mutationKey: [projectKeys.DELETE],
    mutationFn: (id: string) => projectService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [projectKeys.GET_ALL] })
      toast.success(t('delete'))
    },
  })

  return { deleteProjectMutation }
}
