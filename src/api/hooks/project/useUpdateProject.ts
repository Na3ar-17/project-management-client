import { projectKeys } from '@/api/keys/project.keys'
import { projectService } from '@/api/services/project.service'
import { TypeUpdateProjectCard } from '@/types/project.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import debounce from 'lodash.debounce'
import { useCallback, useEffect } from 'react'
import { UseFormWatch } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useUpdateProject = () => {
  const queryClient = useQueryClient()

  const { mutate: updateProjectMutation } = useMutation({
    mutationKey: [projectKeys.UPDATE],
    mutationFn: (dto: TypeUpdateProjectCard) => projectService.update(dto),
    onSuccess: () => {
      queryClient.invalidateQueries()
      toast.success('Successfully updated project')
    },
  })

  return { updateProjectMutation }
}