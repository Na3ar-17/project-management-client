'use client'
import { tasksCategoryData } from '@/data/tasks.data'
import { DragDropContext } from '@hello-pangea/dnd'

import { NextPage } from 'next'
import KanBanColumn from './kanban-column/KanBanColumn'
import { useTasksEnd } from '../hooks/useTasksEnd'
import styles from './KanbanView.module.scss'

const KanbanView: NextPage = () => {
  const { onDragEnd } = useTasksEnd()
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.content}>
        {tasksCategoryData.map((category) => (
          <KanBanColumn category={category} />
        ))}
      </div>
    </DragDropContext>
  )
}

export default KanbanView
