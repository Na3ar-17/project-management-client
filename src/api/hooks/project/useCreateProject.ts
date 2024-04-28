import { projectKeys } from '@/api/keys/project.keys'
import { projectService } from '@/api/services/project.service'
import { dateFormatter } from '@/api/utils'
import { IProjectResponse } from '@/types/project.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const useCreateProject = () => {
  const queryClient = useQueryClient()

  const { mutate: createProjectMutation } = useMutation({
    mutationKey: [projectKeys.CREATE],
    mutationFn: () => projectService.create(),
    onSuccess: () => {
      queryClient.invalidateQueries()
      toast.success('Successfully created project')
    },
  })

  return { createProjectMutation }
}
