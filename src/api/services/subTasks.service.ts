import {
  ISubTask,
  TypeCreateSubTask,
  TypeUpdateSubTask,
} from '@/types/tasks.types'
import { axiosWithAuth } from '../interceptors'
import { errorHandler } from '../utils/errorHandler'

class SubTasksService {
  private URL = 'sub-task'

  async getAll(taskId: string): Promise<ISubTask[]> {
    try {
      const { data } = await axiosWithAuth.get(`${this.URL}/all/${taskId}`)
      return data
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }

  async create(dto: TypeCreateSubTask): Promise<ISubTask> {
    try {
      const { data } = await axiosWithAuth.post(
        `${this.URL}/create/${dto.taskId}`,
        dto
      )
      return data
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }

  async update(dto: TypeUpdateSubTask): Promise<ISubTask> {
    try {
      const { data } = await axiosWithAuth.put(`${this.URL}/update`, dto)
      return data
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }

  async delete({ taskId, id }: { taskId: string; id: string }) {
    try {
      await axiosWithAuth.delete(`${this.URL}/delete/${taskId}/${id}`)
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }
}

export const subTasksService = new SubTasksService()
