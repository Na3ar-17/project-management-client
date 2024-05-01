'use client'
import { NextPage } from 'next'
import styles from './Panel.module.scss'
import cn from 'clsx'
import { ArrowUpDown, ListFilter, Plus } from 'lucide-react'
import { viewTypesData } from '@/data/tasks.data'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { TypeViewType } from '@/types/tasks.types'
import ViewType from './view-type/ViewType'
import { useCreateTask } from '@/api/hooks/tasks/useCreateTask'
interface IProps {
  projectId: string
}

const Panel: NextPage<IProps> = ({ projectId }) => {
  const [type, setType, isLoading] = useLocalStorage<TypeViewType>({
    defaultValue: 'board',
    key: 'ViewType',
  })

  const { createTaskMutation } = useCreateTask()

  return (
    <div className={styles.panel}>
      <div className={styles.views}>
        {viewTypesData.map((el, index) => (
          <ViewType
            key={index}
            onChange={() => setType(el.value)}
            type={type}
            data={el}
          />
        ))}
      </div>

      <div className={styles.actions}>
        <div className={styles.action}>
          <ArrowUpDown className={styles.icon} />
          <p>Sort</p>
        </div>
        <div className={styles.action}>
          <ListFilter className={styles.icon} />
          <p>More filters</p>
        </div>
        <div
          onClick={() => createTaskMutation(projectId)}
          className={cn(styles.action, styles['add-task'])}
        >
          <Plus className={styles.icon} />
          <p>Add Task</p>
        </div>
      </div>
    </div>
  )
}

export default Panel
