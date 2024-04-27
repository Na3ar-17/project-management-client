import { IBase } from './base.type'
import { IProjectResponse } from './project.types'

export interface IUser extends IBase {
  fullName: string
  email: string
  imgLink?: string
  companyName?: string
  projects?: IProjectResponse[]
}

export interface IAuthResponse {
  accessToken: string
  user: IUser
}

export interface IErrorMessageResponse {
  message: string
}

export type TypeUpdateProfile = Partial<
  Omit<IUser, 'projects' | 'id' | 'createdAt' | 'updatedAt'>
>