import { IImage } from '@/types/file.types'
import { File } from 'buffer'
import { axiosWithAuth } from '../interceptors'
import { errorHandler } from './errorHandler'

class FileService {
  private URL = 'files'

  async uploadImage(image: Blob): Promise<IImage> {
    const formData = new FormData()
    formData.append('image', image)

    const config = {
      headers: { 'Content-Type': 'multipart/form-data' },
    }

    try {
      const { data } = await axiosWithAuth.post(
        `${this.URL}/upload`,
        formData,
        config
      )
      return data
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }
}

export const fileService = new FileService()
