import { useUploadImage } from '@/api/hooks/file/useUploadImage'
import { useState } from 'react'
import toast from 'react-hot-toast'

export const useImageUploader = () => {
  const isImageValid = (image: Blob): boolean => {
    const allowedTypes = ['image/jpeg', 'image/png']
    const imageType = image.type.toLowerCase()

    for (const type of allowedTypes) {
      if (type === imageType) {
        return true
      }
    }

    return false
  }

  const [image, setImage] = useState<string>('')
  const { imageData, uploadImageMutation } = useUploadImage()

  const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    let files = event.target.files
    if (files && files.length > 0) {
      let img = files[0]
      if (!isImageValid(img)) {
        event.target.value = ''
        toast.error('File must be an image!')
      } else {
        uploadImageMutation(img)
        setImage(URL.createObjectURL(img))
      }
    }
  }
  return { handleUploadImage, image, imageData }
}
