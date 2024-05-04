import { IBase } from './base.type'
import { IUser } from './user.type'

export interface IMembers extends IBase, IUser {
  role?: EnumMemberRole
  status: EnumMemberStatus
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
