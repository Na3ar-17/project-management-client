import { fileKeys } from '@/api/keys/file.keys'
import { fileService } from '@/api/services/file.service'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useUpdateProfile } from '../user/useUpdateProfile'
import { useTranslations } from 'next-intl'

export const useUploadAvatar = () => {
  const t = useTranslations('toast')

  const { updateProfileMutation } = useUpdateProfile()
  const { mutate: uploadAvatarMutation } = useMutation({
    mutationKey: [fileKeys.UPLOAD],
    mutationFn: (image: Blob) => fileService.uploadImage(image),
    onSuccess: (data) => {
      updateProfileMutation({
        imgLink: data.filename,
      })
    },
    onError: () => {
      toast.error(t('error'))
    },
  })

  return { uploadAvatarMutation }
}
