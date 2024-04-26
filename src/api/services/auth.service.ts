import { TypeAuthFormLogin, TypeAuthFormRegister } from '@/types/authForm.type'
import { IAuthResponse, IErrorMessageResponse, IUser } from '@/types/user.type'
import { axiosClassic } from '../interceptors'
import { removeFromStorage, saveTokenStorage } from './auth-toke.service'
import { AxiosError } from 'axios'
import { IAPIError } from '@/types/base.type'
import { errorCatch } from '../error'
import { isAxiosError } from './isAxiosError'

class AuthService {
  private URL = 'auth'

  async register(dto: TypeAuthFormRegister): Promise<IAuthResponse> {
    const { data } = await axiosClassic.post<IAuthResponse>(
      `${this.URL}/register`,
      dto
    )
    if (data.accessToken) saveTokenStorage(data.accessToken)
    return data
  }

  async login(dto: TypeAuthFormLogin): Promise<IAuthResponse> {
    try {
      const { data } = await axiosClassic.post<IAuthResponse>(
        `${this.URL}/login`,
        dto
      )

      if (data.accessToken) saveTokenStorage(data.accessToken)

      return data
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response) {
          const responseData = error.response.data as IAPIError
          console.log(responseData.message)
        }
      }
      throw error
    }
  }

  async getNewTokens() {
    const { data } = await axiosClassic.post<IAuthResponse>(
      `${this.URL}/login/access-token`
    )
    if (data.accessToken) saveTokenStorage(data.accessToken)

    return data
  }

  async logout() {
    const { data } = await axiosClassic.post<boolean>(`${this.URL}/logout`)

    if (data) removeFromStorage()

    return data
  }
}

export const authService = new AuthService()
