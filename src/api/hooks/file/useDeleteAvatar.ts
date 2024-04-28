import { fileKeys } from '@/api/keys/file.keys'
import { fileService } from '@/api/services/file.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useUpdateProfile } from '../user/useUpdateProfile'

export const useDeleteAvatar = () => {
  const queryClient = useQueryClient()
  const { updateProfileMutation } = useUpdateProfile()
  const { mutate: deleteImageMutation } = useMutation({
    mutationKey: [fileKeys.DELETE],
    mutationFn: (imageName: string) => fileService.deleteImage(imageName),
    onSuccess: () => {
      updateProfileMutation({
        imgLink: '',
      })
      queryClient.invalidateQueries()
    },
  })

  return { deleteImageMutation }
}
