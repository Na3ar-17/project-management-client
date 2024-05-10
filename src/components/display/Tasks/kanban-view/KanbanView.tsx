'use client'
import { tasksCategoryData } from '@/data/tasks.data'
import { DragDropContext, DropResult } from '@hello-pangea/dnd'

import { NextPage } from 'next'
import KanBanColumn from './kanban-column/KanBanColumn'
import styles from './KanbanView.module.scss'
import { useGetTasks } from '@/api/hooks/tasks/useGetTasks'
import { ITaskCard, IViewTypesPros } from '@/types/tasks.types'

const KanbanView: NextPage<IViewTypesPros> = ({
  projectId,
  onDragEnd,
  tasksState,
}) => {
  //TODO create loader and error message

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.content}>
        {tasksState.length <= 0 ? (
          // Create cool message about empty tasks
          <div>No elenemts</div>
        ) : (
          tasksCategoryData.map((category, index) => (
            <KanBanColumn key={index} category={category} tasks={tasksState} />
          ))
        )}
      </div>
    </DragDropContext>
  )
}

export default KanbanView
