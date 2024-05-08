import type { CSSProperties } from 'react'
import { IBase } from './base.type'
import { IProjectResponse } from './project.types'

//TODO create user type

export interface ICategory {
  value: EnumTaskStatus
  styles: CSSProperties
  label: string
}

export interface ISubTask extends IBase {
  title: string
  isCompleted: boolean
  taskId: string
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
  subTasks?: ISubTask[]
  priority?: EnumTaskPriority
  dueDate: string
  description: string
  comments?: IComment[]
  status: EnumTaskStatus
  projectId: string
  progressPercent: number
  project: IProjectResponse
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

export type TypeCreateSubTask = Omit<
  ISubTask,
  'isCompleted' | 'id' | 'createdAt' | 'updatedAt'
>

export type TypeUpdateSubTask = Partial<
  Omit<ISubTask, 'createdAt' | 'updatedAt'>
>
