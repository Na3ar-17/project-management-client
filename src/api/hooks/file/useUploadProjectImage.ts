import { fileKeys } from '@/api/keys/file.keys'
import { fileService } from '@/api/services/file.service'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useUpdateProject } from '../project/useUpdateProject'
import { useTranslations } from 'next-intl'

export const useUploadProjectImage = (id: string) => {
  const t = useTranslations('toast')
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
      toast.error(t('error'))
    },
  })

  return { uploadProjectImageMutation }
}
