import {
  IUser,
  TypeUpdatePasswod,
  TypeUpdateProfile,
  TypeUserSearchResponse,
} from '@/types/user.type'
import { axiosClassic, axiosWithAuth } from '../interceptors'
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

  async getByEmail(data: { email: string }): Promise<{ success: boolean }> {
    try {
      const { data: userData } = await axiosClassic.post(
        `${this.URL}/get-by-email`,
        data
      )
      return userData
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }

  async updatePassword(dto: TypeUpdatePasswod): Promise<IUser> {
    try {
      const { data } = await axiosClassic.put(`${this.URL}/password`, dto)
      return data
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }

  async verifyToken({ token }: { token: string }): Promise<{ email: string }> {
    try {
      const response = await fetch(
        `http://localhost:4200/api/${this.URL}/verify-token/${token}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      const data = await response.json()
      return data
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }
}

export const userService = new UserService()
