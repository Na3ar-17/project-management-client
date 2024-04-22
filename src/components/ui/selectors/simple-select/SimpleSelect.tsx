'use client'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
} from '../../shadcn/ui/select'
import { NextPage } from 'next'
import styles from './SimpleSelect.module.scss'
import TaskPriorityBadge from '../../badges/task-priority-badge/TaskPriorityBadge'
import { simpleSelectData } from '@/data/tasks.data'

interface IProps {
  children: React.ReactNode
}

const SimpleSelect: NextPage<IProps> = ({ children }) => {
  return (
    <Select>
      <SelectTrigger>{children}</SelectTrigger>
      <SelectContent className={styles.content}>
        <SelectGroup>
          {simpleSelectData.map((el) => (
            <SelectItem className={styles.item} value={el.value}>
              <TaskPriorityBadge text={el.lable} />
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SimpleSelect
