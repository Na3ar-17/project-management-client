import { IBase } from './base.type'
import { IUser } from './user.type'

export interface IMembers extends IBase {
  role?: EnumMemberRole
  status: EnumMemberStatus
  user: IUser
}

export interface ITableColumns {
  lable: string
  value: string
}

export enum EnumMemberRole {
  Member = 'Member',
  Admin = 'Admin',
  Creator = 'Creator',
}

export enum EnumMemberStatus {
  Active = 'Active',
  Inactive = 'Inactive',
}
