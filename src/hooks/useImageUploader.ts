import { isImageValid } from '@/api/utils/isImageValid'
import { useState } from 'react'
import toast from 'react-hot-toast'

export const useImageUploader = () => {
  const [imgFile, setImgFile] = useState<Blob>()

  const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    let files = event.target.files

    if (files && files.length > 0) {
      let img = files[0]

      if (!isImageValid(img)) {
        event.target.value = ''
        toast.error('File must be an image!')
      } else {
        setImgFile(img)
      }
    }
  }

  return { handleUploadImage, imgFile }
}
