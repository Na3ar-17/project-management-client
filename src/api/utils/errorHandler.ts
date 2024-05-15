import { IAPIError } from '@/types/base.type'
import { AxiosError } from 'axios'
import toast from 'react-hot-toast'

function isAxiosError(error: any): error is AxiosError {
  return error.isAxiosError
}

export const errorHandler = (error: any) => {
  if (isAxiosError(error)) {
    if (error.response) {
      const res = error.response.data as IAPIError
      if (error.response.status === 404) {
        toast.error('Something went wrong')
      } else {
        toast.error(res.message)
      }
    } else {
      toast.error('Something went wrong')
    }
  }
}
