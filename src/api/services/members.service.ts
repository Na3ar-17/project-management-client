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

  async addNewMember(
    projectId: string,
    ownerId: string
  ): Promise<{ project: { slug: string; id: string } }> {
    try {
      const { data } = await axiosWithAuth.post(
        `${this.URL}/add-new/${projectId}/${ownerId}`
      )

      return data
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }

  async kick({ projectId, id }: { projectId: string; id: string }) {
    try {
      await axiosWithAuth.delete(`${this.URL}/kick/${projectId}/${id}`)
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }
}

export const membersService = new MembersService()
