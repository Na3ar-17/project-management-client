import {
  TypeCreateNotificationDto,
  INotifications,
  TypeRejectInvitation,
} from '@/types/notifications.types'
import { axiosWithAuth } from '../interceptors'
import { errorHandler } from '../utils/errorHandler'

class NotificationsService {
  private URL = 'notifications'

  async getAll(): Promise<INotifications[]> {
    try {
      const { data } = await axiosWithAuth.get(`${this.URL}/my`)
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

export const notificationsService = new NotificationsService()
