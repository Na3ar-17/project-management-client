import { NextPage } from 'next'
import { taskBadgeStyleFormat } from './utils'
interface IProps {
  text: string
}

const TaskPriorityBadge: NextPage<IProps> = ({ text }) => {
  return taskBadgeStyleFormat(text)
}

export default TaskPriorityBadge
