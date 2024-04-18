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

interface IProps {
  data: {
    value: string
    lable: string
  }[]

  children: React.ReactNode
}

const SimpleSelect: NextPage<IProps> = ({ data, children }) => {
  return (
    <Select>
      <SelectTrigger>{children}</SelectTrigger>
      <SelectContent className={styles.content}>
        <SelectGroup>
          {data.map((el) => (
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
