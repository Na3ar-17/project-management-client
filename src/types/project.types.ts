import { IBase } from './base.type'
import { IMembers } from './members.type'

export interface IProjectResponse extends IBase {
  name: string
  slug?: string
  image?: string
  end: string
  ownerId: string
  userId: string
  members: IMembers[]
}

export type TypeSideBarSubMenuElement = Omit<
  IProjectResponse,
  'id' | 'date' | 'image'
>

export type TypeUpdateProjectCard = Partial<
  Omit<IProjectResponse, 'slug' | 'createdAt' | 'updatedAt'>
>
