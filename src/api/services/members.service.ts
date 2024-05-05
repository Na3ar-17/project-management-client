import { IMembers } from '@/types/members.type'
import { axiosWithAuth } from '../interceptors'
import { errorHandler } from '../utils/errorHandler'

class MembersService {
  private URL = 'members'

  async getAll(projectId: string): Promise<IMembers[]> {
    try {
      const { data } = await axiosWithAuth.get(`${this.URL}/all/${projectId}`)
      return data
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }

  async addNewMember(projectId: string) {
    try {
      const { data } = await axiosWithAuth.post(
        `${this.URL}add-new/${projectId}`
      )

      return data
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }
}

export const membersService = new MembersService()
