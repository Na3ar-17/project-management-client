import { IBase } from './base.type'
import { ITaskCard } from './tasks.types'

export interface IStatisticsResponse extends Omit<IBase, 'id'> {
  projectId: string
  tasksCompleted: number
  tasksDeleted: number
  project: {
    tasks: ITaskCard[]
  }
}
