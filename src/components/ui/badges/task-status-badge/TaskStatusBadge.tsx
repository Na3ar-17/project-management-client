import { NextPage } from 'next'
import { useTaskStatusBadgeFormat } from './utils'
interface IProps {
  status: string
}

const TaskStatusBadge: NextPage<IProps> = ({ status }) => {
  return useTaskStatusBadgeFormat(status)
}

export default TaskStatusBadge
