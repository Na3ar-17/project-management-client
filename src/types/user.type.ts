import { IBase } from './base.type'
import { IProjectResponse } from './project.types'

export interface IUser extends IBase {
  fullName: string
  email: string
  imgLink?: string
  projects?: IProjectResponse[]
}

export interface IAuthResponse {
  accessToken: string
  user: IUser
}

export type TypeUserSearchResponse = Omit<
  IUser,
  'createdAt' | 'updatedAt' | 'projects'
>

export type TypeUpdateProfile = Partial<
  Omit<IUser, 'projects' | 'id' | 'createdAt' | 'updatedAt'>
>

export type TypeUpdatePasswod = TypeUpdateProfile & {
  token: string
  password: string
}
