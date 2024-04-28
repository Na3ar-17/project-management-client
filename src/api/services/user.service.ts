import { IUser, TypeUpdateProfile } from '@/types/user.type'
import { axiosWithAuth } from '../interceptors'
import { errorHandler } from './errorHandler'

class UserService {
  private URL = 'user'

  // TODO make try catch

  async update(dto: TypeUpdateProfile) {
    try {
      const { data } = await axiosWithAuth.put(this.URL, dto)
      return data
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }

  async getProfile(): Promise<IUser> {
    try {
      const { data } = await axiosWithAuth.get<IUser>(this.URL)
      return data
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }
}

export const userService = new UserService()
