import { fileKeys } from '@/api/keys/file.keys'
import { fileService } from '@/api/services/file.service'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useUpdateProject } from '../project/useUpdateProject'

export const useUploadProjectImage = (id: string) => {
  const { updateProjectMutation } = useUpdateProject()
  const { mutate: uploadProjectImageMutation } = useMutation({
    mutationKey: [fileKeys.UPLOAD],
    mutationFn: (image: Blob) => fileService.uploadImage(image),
    onSuccess: (data) => {
      updateProjectMutation({
        id,
        image: data.filename,
      })
    },
    onError: () => {
      toast.error('Something went wrong')
    },
  })

  return { uploadProjectImageMutation }
}
