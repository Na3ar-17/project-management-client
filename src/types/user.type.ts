import { IBase } from './base.type'
import { IProjectResponse } from './project.types'

export interface IUser extends IBase {
  fullName: string
  role?: EnumUserRole
  email: string
  imgLink?: string
  companyName?: string
  projects: IProjectResponse[]
}

export enum EnumUserRole {
  User = 'User',
}
