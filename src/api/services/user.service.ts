import {
  IUser,
  TypeUpdateProfile,
  TypeUserSearchResponse,
} from '@/types/user.type'
import { axiosWithAuth } from '../interceptors'
import { errorHandler } from '../utils/errorHandler'

class UserService {
  private URL = 'user'

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

  async delete() {
    try {
      await axiosWithAuth.delete(this.URL)
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }

  async searchByEmail(dto: {
    email: string
  }): Promise<TypeUserSearchResponse[]> {
    try {
      const { data } = await axiosWithAuth.post(`${this.URL}/search`, dto)
      return data
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }
}

export const userService = new UserService()
