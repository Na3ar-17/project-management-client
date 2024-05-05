import { IBase } from './base.type'
import { IUser } from './user.type'

export interface INotifications extends IBase {
  content: string
  type: EnumNotificationType
  recipientId: string
  owner: Omit<IUser, 'companyName' | 'createdAt' | 'updatedAt'>
}
export type TypeCreateNotificationDto = Omit<
  INotifications,
  'id' | 'companyName' | 'createdAt' | 'updatedAt'
>

export enum EnumNotificationType {
  Invitation,
  TaskAssignment,
  DeadlineReminder,
}
