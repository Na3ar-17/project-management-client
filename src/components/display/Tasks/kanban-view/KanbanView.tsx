'use client'
import { tasksCategoryData } from '@/data/tasks.data'
import { DragDropContext } from '@hello-pangea/dnd'

import { NextPage } from 'next'
import KanBanColumn from './kanban-column/KanBanColumn'
import styles from './KanbanView.module.scss'
import { useGetTasks } from '@/api/hooks/tasks/useGetTasks'
import { useTasksEnd } from '@/api/hooks/tasks/useTasksEnd'
interface IProps {
  projectId: string
}

const KanbanView: NextPage<IProps> = ({ projectId }) => {
  const { tasksData, isFetching, isSuccess, setTasksState, tasksState } =
    useGetTasks(projectId)

  const { onDragEnd } = useTasksEnd({ projectId, setTasksState })
  //TODO create loader and error message
  if (!tasksData || !tasksState) {
    return <div>Error</div>
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.content}>
        {tasksCategoryData.map((category, index) => (
          <KanBanColumn key={index} category={category} tasks={tasksState} />
        ))}
      </div>
    </DragDropContext>
  )
}

export default KanbanView
