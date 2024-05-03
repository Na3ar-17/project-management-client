import { IBase } from './base.type'

export interface INotifications extends IBase {
  content: string
  type?: EnumNotificationType
  recipientId: string
}

export enum EnumNotificationType {
  Invitation,
  TaskAssignment,
  DeadlineReminder,
}
