import { IUpdateUser } from '@/types/user.type'
import { axiosWithAuth } from '../interceptors'

class UserService {
  private URL = 'user'

  async update(dto: IUpdateUser) {
    const { data } = await axiosWithAuth.put(this.URL, dto)
    return data
  }
}

export const userService = new UserService()
