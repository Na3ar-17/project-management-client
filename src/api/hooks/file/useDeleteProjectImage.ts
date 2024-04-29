import { fileKeys } from '@/api/keys/file.keys'
import { fileService } from '@/api/services/file.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useUpdateProject } from '../project/useUpdateProject'

export const useDeleteProjectImage = (id: string) => {
  const queryClient = useQueryClient()
  const { updateProjectMutation } = useUpdateProject()

  const { mutate: deleteProjectImageMutation } = useMutation({
    mutationKey: [fileKeys.DELETE],
    mutationFn: (imageName: string) => fileService.deleteImage(imageName),
    onSuccess: () => {
      updateProjectMutation({
        id,
        image: '',
      })
      queryClient.invalidateQueries()
    },
  })

  return { deleteProjectImageMutation }
}
