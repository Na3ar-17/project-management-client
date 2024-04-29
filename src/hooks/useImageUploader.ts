import { useUploadAvatar } from '@/api/hooks/file/useUploadAvatar'
import { useUpdateProfile } from '@/api/hooks/user/useUpdateProfile'
import { useState } from 'react'
import toast from 'react-hot-toast'

export const useImageUploader = () => {
  const isImageValid = (image: Blob): boolean => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg']
    const imageType = image.type.toLowerCase()

    for (const type of allowedTypes) {
      if (type === imageType) {
        return true
      }
    }

    return false
  }

  const { uploadImageMutation } = useUploadAvatar()
  const { updateProfileMutation } = useUpdateProfile()
  const [img, setImg] = useState<string>('')

  const handleUploadAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    let files = event.target.files

    if (files && files.length > 0) {
      let img = files[0]

      if (!isImageValid(img)) {
        event.target.value = ''
        toast.error('File must be an image!')
      } else {
        uploadImageMutation(img)
      }
    }
  }

  const handleDeleteAvatar = () => {
    updateProfileMutation({
      imgLink: '',
    })
  }
  return { handleUploadAvatar, handleDeleteAvatar }
}
