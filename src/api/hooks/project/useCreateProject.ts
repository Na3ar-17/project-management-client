import { projectKeys } from '@/api/keys/project.keys'
import { projectService } from '@/api/services/project.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const useCreateProject = () => {
  const queryClient = useQueryClient()

  const { mutate: createProjectMutation } = useMutation({
    mutationKey: [projectKeys.CREATE],
    mutationFn: () => projectService.create(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [projectKeys.GET_ALL] })
      toast.success('Successfully created project')
    },
  })

  return { createProjectMutation }
}
