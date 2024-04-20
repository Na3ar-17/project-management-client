import { NextPage } from 'next'
import styles from './TaskRow.module.scss'
import CheckBox from '@/components/ui/check-boxes/check-box-standart/CheckBox'
import { ITaskRowData } from '@/types/tasks.types'
import cn from 'clsx'
interface IProps {
  data: ITaskRowData
}

const TaskRow: NextPage<IProps> = ({ data }) => {
  const { isCompleted, title } = data
  return (
    <li className={styles.item}>
      <CheckBox checked={isCompleted} />
      <p className={cn(isCompleted && styles.completed)}>{title}</p>
    </li>
  )
}

export default TaskRow
