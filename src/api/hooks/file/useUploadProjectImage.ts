import { fileKeys } from '@/api/keys/file.keys'
import { fileService } from '@/api/services/file.service'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const useUploadProjectImage = () => {
  const { mutate: uploadProjectImageMutation } = useMutation({
    mutationKey: [fileKeys.UPLOAD],
    mutationFn: (image: Blob) => fileService.uploadImage(image),
    onSuccess: (data) => {
      console.log(data)
    },
    onError: () => {
      toast.error('Something went wrong')
    },
  })

  return { uploadProjectImageMutation }
}
