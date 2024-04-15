export interface IMembers {
  id: string
  fullName: string
  role: EnumUserRole
  status: EnumUserStatus
  email: string
  imgLink?: string
}

export enum EnumUserRole {
  USER = 'User',
  MODERATOR = 'Moderator',
  CREATOR = 'Creator',
}

export enum EnumUserStatus {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
}
