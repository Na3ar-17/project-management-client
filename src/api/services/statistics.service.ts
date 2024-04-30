import { IStatisticsResponse } from '@/types/statistics.types'
import { axiosWithAuth } from '../interceptors'
import { errorHandler } from '../utils/errorHandler'

class StatisticsService {
  private URL = 'statistics'

  async getByProjectId(projectId: string): Promise<IStatisticsResponse> {
    try {
      const { data } = await axiosWithAuth.get(`${this.URL}/${projectId}`)
      return data
    } catch (error) {
      errorHandler(error)
      throw error
    }
  }
}

export const statisticsService = new StatisticsService()
