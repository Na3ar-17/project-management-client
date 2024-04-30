import { ITaskCard, TypeUpdateTaskCard } from '@/types/tasks.types'
import { axiosWithAuth } from '../interceptors'
import { errorHandler } from '../utils/errorHandler'

class TasksService {
  private URL = 'tasks'

  async getAll(projectId: string): Promise<ITaskCard[]> {
    try {
      const { data } = await axiosWithAuth.get(`${this.URL}/all/${projectId}`)
      return data
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }

  async getOne(projectId: string, taskId: string): Promise<ITaskCard> {
    try {
      const { data } = await axiosWithAuth.get(
        `${this.URL}/get-one/${projectId}/${taskId}`
      )
      return data
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }

  async create(projectId: string): Promise<ITaskCard> {
    try {
      const { data } = await axiosWithAuth.post(`${this.URL}/${projectId}`)
      return data
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }

  async delete({ projectId, id }: { projectId: string; id: string }) {
    try {
      const { data } = await axiosWithAuth.delete(
        `${this.URL}/${projectId}/${id}`
      )
      return data
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }

  async update(dto: TypeUpdateTaskCard): Promise<ITaskCard> {
    try {
      const { data } = await axiosWithAuth.put(`${this.URL}/update`, dto)
      return data
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }
}

export const tasksService = new TasksService()
