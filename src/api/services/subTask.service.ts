import { ISubTask } from '@/types/tasks.types'
import { axiosWithAuth } from '../interceptors'
import { errorHandler } from '../utils/errorHandler'

class SubTaskService {
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
}

export const subTaskService = new SubTaskService()
