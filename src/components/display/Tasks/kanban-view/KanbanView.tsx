'use client'
import { generateTasksCategoryData } from '@/data/tasks.data'
import { DragDropContext, DropResult } from '@hello-pangea/dnd'

import { NextPage } from 'next'
import KanBanColumn from './kanban-column/KanBanColumn'
import styles from './KanbanView.module.scss'
import { IViewTypesPros } from '@/types/tasks.types'
import EmptyMessage from '@/components/ui/empty-message/EmptyMessage'
import Spinner from '@/components/ui/loaders/spinner/Spinner'
import { useTranslations } from 'next-intl'

const KanbanView: NextPage<IViewTypesPros> = ({
  onDragEnd,
  tasksState,
  setTasksState,
}) => {
  const t = useTranslations('Projects.Tasks')
  const { tasksCategoryData } = generateTasksCategoryData({
    t1: t('status.queue'),
    t2: t('status.on-progress'),
    t3: t('status.testing'),
    t4: t('status.completed'),
  })

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.content}>
        {tasksState.length <= 0 ? (
          <EmptyMessage
            title={t('empty-message')}
            subTitle=""
            Loader={Spinner}
            className="absolute"
          />
        ) : (
          tasksCategoryData.map((category, index) => (
            <KanBanColumn
              setTasksState={setTasksState}
              key={index}
              category={category}
              tasks={tasksState}
            />
          ))
        )}
      </div>
    </DragDropContext>
  )
}

export default KanbanView
