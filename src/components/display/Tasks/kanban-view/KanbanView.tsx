'use client'
import { tasksCategoryData } from '@/data/tasks.data'
import { DragDropContext, DropResult } from '@hello-pangea/dnd'

import { NextPage } from 'next'
import KanBanColumn from './kanban-column/KanBanColumn'
import styles from './KanbanView.module.scss'
import { ITaskCard, IViewTypesPros } from '@/types/tasks.types'
import EmptyMessage from '@/components/ui/empty-message/EmptyMessage'
import Spinner from '@/components/ui/loaders/spinner/Spinner'

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
          <EmptyMessage
            title="You don't have any tasks"
            subTitle=""
            Loader={Spinner}
            className="absolute"
          />
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
