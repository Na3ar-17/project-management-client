import { IBase } from './base.type'

export interface IStatisticsResponse extends Omit<IBase, 'id'> {
  projectId: string
  tasksCompleted: number
  tasksCreated: number
  tasksDeleted: number
}
