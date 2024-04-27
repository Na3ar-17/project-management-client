import { TypeAuthFormLogin, TypeAuthFormRegister } from '@/types/authForm.type'
import { IAuthResponse } from '@/types/user.type'
import { axiosClassic } from '../interceptors'
import { removeFromStorage, saveTokenStorage } from './auth-toke.service'
import { errorHandler } from './errorHandler'

class AuthService {
  private URL = 'auth'

  // TODO handle error with uncorrect url

  async register(dto: TypeAuthFormRegister): Promise<IAuthResponse> {
    try {
      const { data } = await axiosClassic.post<IAuthResponse>(
        `${this.URL}/register`,
        dto
      )
      if (data.accessToken) saveTokenStorage(data.accessToken)
      return data
    } catch (error) {
      errorHandler(error)
      throw error
    }
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
      errorHandler(error)

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
