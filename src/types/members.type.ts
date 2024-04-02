export interface IMembers {
  id: string
  fullName: string
  role: EnumUserRole
  status: EnumUserStatus
  email: string
}

export enum EnumUserRole {
  USER,
  MODERATOR,
  CREATOR,
}

export enum EnumUserStatus {
  ACTIVE,
  INACTIVE,
}

export const userRoleText: Record<EnumUserRole, string> = {
  [EnumUserRole.USER]: 'User',
  [EnumUserRole.MODERATOR]: 'Moderator',
  [EnumUserRole.CREATOR]: 'Creator',
}

export const userStatusText: Record<EnumUserStatus, string> = {
  [EnumUserStatus.ACTIVE]: 'Active',
  [EnumUserStatus.INACTIVE]: 'Inactive',
}
