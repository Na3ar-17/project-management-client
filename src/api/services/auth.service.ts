import { TypeAuthFormLogin, TypeAuthFormRegister } from '@/types/authForm.type'
import { IAuthResponse, IUser } from '@/types/user.type'
import { axiosClassic } from '../interceptors'
import { removeFromStorage, saveTokenStorage } from './auth-toke.service'

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
    const { data } = await axiosClassic.post<IAuthResponse>(
      `${this.URL}/login`,
      dto
    )
    if (data.accessToken) saveTokenStorage(data.accessToken)
    return data
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
