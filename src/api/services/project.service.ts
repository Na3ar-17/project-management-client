import { IProjectResponse } from '@/types/project.types'
import { axiosWithAuth } from '../interceptors'
import { errorHandler } from './errorHandler'

class ProjectService {
  private URL = 'project'

  async getAll(): Promise<IProjectResponse[]> {
    try {
      const { data } = await axiosWithAuth.get(`${this.URL}/all`)
      return data
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }

  async create(): Promise<IProjectResponse> {
    try {
      const { data } = await axiosWithAuth.post(`${this.URL}/create`)
      return data
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }

  async delete(id: string) {
    try {
      await axiosWithAuth.delete(`${this.URL}/delete/${id}`)
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }
}

export const projectService = new ProjectService()
