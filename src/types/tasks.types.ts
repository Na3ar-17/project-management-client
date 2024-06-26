import type { CSSProperties, Dispatch, SetStateAction } from 'react'
import { IBase } from './base.type'
import { IProjectResponse } from './project.types'
import {
  DraggableProvided,
  DraggableStateSnapshot,
  DropResult,
} from '@hello-pangea/dnd'

export interface ICategory {
  value: EnumTaskStatus
  styles: CSSProperties
  label: string
}

export interface IViewTypesPros {
  projectId: string
  onDragEnd: (result: DropResult) => void
  tasksState: ITaskCard[]
  setTasksState: Dispatch<SetStateAction<ITaskCard[] | undefined>>
}

export interface IListAndKanbanProps {
  category: ICategory
  tasks: ITaskCard[]
  setTasksState: Dispatch<SetStateAction<ITaskCard[] | undefined>>
}

export interface IListAndTaskCardProps {
  data: ITaskCard
  provided: DraggableProvided
  snapshot: DraggableStateSnapshot
  setTasksState: Dispatch<SetStateAction<ITaskCard[] | undefined>>
}

export interface ISubTask extends IBase {
  title: string
  isCompleted: boolean
  taskId: string
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
  status: EnumTaskStatus
  projectId: string
  progressPercent: number
  isCompleted: boolean
  index: number
  project?: IProjectResponse | undefined
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
