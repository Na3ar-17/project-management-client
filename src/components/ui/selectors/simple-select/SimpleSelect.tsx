'use client'
import { simpleSelectData } from '@/data/tasks.data'
import { NextPage } from 'next'
import TaskPriorityBadge from '../../badges/task-priority-badge/TaskPriorityBadge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '../../shadcn/ui/select'
import styles from './SimpleSelect.module.scss'

interface IProps {
  value: string
  onChange: (value: string) => void
  disabled?: boolean
}

const SimpleSelect: NextPage<IProps> = ({
  onChange,
  value,
  disabled = false,
}) => {
  return (
    <Select disabled={disabled} onValueChange={onChange} defaultValue={value}>
      <SelectTrigger>
        {value ? <TaskPriorityBadge text={value} /> : 'select'}
      </SelectTrigger>
      <SelectContent className={styles.content}>
        {simpleSelectData.map((el, index) => (
          <SelectItem className={styles.item} value={el.value} key={index}>
            <TaskPriorityBadge text={el.value} />
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default SimpleSelect
