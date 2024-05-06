import { IBase } from './base.type'
import { IUser } from './user.type'

export interface INotifications extends IBase {
  content: string
  type: EnumNotificationType
  recipientId: string
  owner?: Omit<IUser, 'companyName' | 'createdAt' | 'updatedAt'>
  projectId?: string
}
export type TypeCreateNotificationDto = Omit<
  INotifications,
  'id' | 'createdAt' | 'updatedAt' | 'type'
>

export type TypeRejectInvitation = {
  recipientId: string
  ownerId: string
  id: string
}

export enum EnumNotificationType {
  Invitation = 'Invitation',
  TaskAssignment = 'TaskAssignment',
  DeadlineReminder = 'DeadlineReminder',
  RejectInvitation = 'RejectInvitation',
}
