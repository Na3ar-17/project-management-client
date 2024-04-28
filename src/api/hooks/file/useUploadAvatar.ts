import { fileKeys } from '@/api/keys/file.keys'
import { fileService } from '@/api/services/file.service'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useUpdateProfile } from '../user/useUpdateProfile'

export const useUploadAvatar = () => {
  const { updateProfileMutation } = useUpdateProfile()
  const { mutate: uploadImageMutation } = useMutation({
    mutationKey: [fileKeys.UPLOAD],
    mutationFn: (image: Blob) => fileService.uploadImage(image),
    onSuccess: (data) => {
      updateProfileMutation({
        imgLink: data.filename,
      })
    },
    onError: () => {
      toast.error('Something went wrong')
    },
  })

  return { uploadImageMutation }
}
