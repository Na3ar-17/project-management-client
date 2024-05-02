import { ISubTask, TypeCreateSubTask } from '@/types/tasks.types'
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
        `${this.URL}/create/${dto.taskId}`
      )
      return data
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }
}

export const subTasksService = new SubTasksService()
