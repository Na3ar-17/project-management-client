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
  low = 'Low',
  normal = 'Normal',
  high = 'High',
}

export enum EnumTaskStatus {
  inQueue = 'In Queue',
  onProgress = 'On Progress',
  testing = 'Testing',
  completed = 'Completed',
}

export interface ITaskCard extends IBase {
  title: string
  subTasks?: ISubTaskRow[]
  priority?: EnumTaskPriority
  dueDate: string
  createdBy: any
  descripton: string
  assigneesers: IMembers[]
  comments?: IComment[]
  status: EnumTaskStatus
}

export interface IViewType {
  Icon: React.ElementType
  lable: string
  value: TypeViewType
}

export type TypeUpdateTaskCard = Omit<
  ITaskCard,
  'subTasks' | 'comments' | 'createdAt' | 'updatedAt'
>

export type TypeViewType = 'board' | 'list'
