import { fileKeys } from '@/api/keys/file.keys'
import { fileService } from '@/api/services/file.service'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const useUploadImage = () => {
  const { mutate: uploadImageMutation, data: imageData } = useMutation({
    mutationKey: [fileKeys.UPLOAD],
    mutationFn: (image: Blob) => fileService.uploadImage(image),
    onError: () => {
      toast.error('Something went wrong')
    },
  })

  return { uploadImageMutation, imageData }
}
