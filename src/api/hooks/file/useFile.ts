import { fileKeys } from '@/api/keys/file.keys'
import { fileService } from '@/api/services/file.service'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import toast from 'react-hot-toast'
import { useProject } from '../project/useProject'
import { useUser } from '../user/useUser'

export const useFile = () => {
  const queryClient = useQueryClient()
  const t = useTranslations('toast')
  const { useUpdateProject } = useProject()
  const { useUpdateProfile } = useUser()

  const useDeleteAvatar = () => {
    const { updateProfileMutation } = useUpdateProfile()
    const { mutate: deleteAvatarMutation } = useMutation({
      mutationKey: [fileKeys.DELETE],
      mutationFn: (imageName: string) => fileService.deleteImage(imageName),
      onSuccess: () => {
        updateProfileMutation({
          imgLink: '',
        })
        queryClient.invalidateQueries({ queryKey: [fileKeys.UPLOAD] })
      },
    })

    return { deleteAvatarMutation }
  }

  const useDeleteProjectImage = (id: string) => {
    const { updateProjectMutation } = useUpdateProject()

    const { mutate: deleteProjectImageMutation } = useMutation({
      mutationKey: [fileKeys.DELETE],
      mutationFn: (imageName: string) => fileService.deleteImage(imageName),
      onSuccess: () => {
        updateProjectMutation({
          id,
          image: '',
        })
        queryClient.invalidateQueries({ queryKey: [fileKeys.UPLOAD] })
      },
    })

    return { deleteProjectImageMutation }
  }

  const useUploadAvatar = () => {
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

  const useUploadProjectImage = (id: string) => {
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

  return {
    useDeleteAvatar,
    useDeleteProjectImage,
    useUploadProjectImage,
    useUploadAvatar,
  }
}
