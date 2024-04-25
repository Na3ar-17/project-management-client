import { IBase } from './base.type'

export interface IMembers extends IBase {
  fullName: string
  role?: EnumMemberRole
  status: EnumMemberStatus
  email: string
  imgLink?: string
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
