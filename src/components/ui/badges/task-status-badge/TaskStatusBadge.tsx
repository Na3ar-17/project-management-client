import { NextPage } from 'next'
import { taskStatusBadgeFormat } from './utils'
interface IProps {
  status: string
}

const TaskStatusBadge: NextPage<IProps> = ({ status }) => {
  return taskStatusBadgeFormat(status)
}

export default TaskStatusBadge
