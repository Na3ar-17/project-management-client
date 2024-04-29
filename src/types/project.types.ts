import { IBase } from './base.type'

export interface IProjectResponse extends IBase {
  name: string
  slug?: string
  image?: string
  end: string
}

export type TypeSideBarSubMenuElement = Omit<
  IProjectResponse,
  'id' | 'date' | 'image'
>

export type TypeUpdateProjectCard = Partial<
  Omit<IProjectResponse, 'slug' | 'createdAt' | 'updatedAt'>
>
