import { projectKeys } from '@/api/keys/project.keys'
import { projectService } from '@/api/services/project.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const useDeleteProject = () => {
  const queryClient = useQueryClient()

  const { mutate: deleteProjectMutation } = useMutation({
    mutationKey: [projectKeys.DELETE],
    mutationFn: (id: string) => projectService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [projectKeys.GET_ALL] })
      toast.success('Successfully deleted project')
    },
  })

  return { deleteProjectMutation }
}
