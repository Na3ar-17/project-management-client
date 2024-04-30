import type { CSSProperties } from 'react'
import { IMembers } from './members.type'
import { IBase } from './base.type'

//TODO create user type

export interface ICategory {
  value: EnumTaskStatus
  styles: CSSProperties
  label: string
}

export interface ISubTaskRow extends IBase {
  title: string
  isCompleted: boolean
}

export interface IComment extends IBase {
  text: string
  owner: any
}

export enum EnumTaskPriority {
  low = 'low',
  normal = 'normal',
  high = 'high',
}

export enum EnumTaskStatus {
  inQueue = 'inQueue',
  onProgress = 'onProgress',
  testing = 'testing',
  completed = 'completed',
}

export interface ITaskCard extends IBase {
  title: string
  subTasks?: ISubTaskRow[]
  priority?: EnumTaskPriority
  dueDate: string
  createdBy: IMembers
  description: string
  assigneesers: IMembers[]
  comments?: IComment[]
  status: EnumTaskStatus
  projectId: string
}

export interface IViewType {
  Icon: React.ElementType
  lable: string
  value: TypeViewType
}

export type TypeUpdateTaskCard = Partial<
  Omit<
    ITaskCard,
    'subTasks' | 'comments' | 'createdAt' | 'updatedAt' | 'createdBy'
  >
> & { projectId: string }

export type TypeViewType = 'board' | 'list'
