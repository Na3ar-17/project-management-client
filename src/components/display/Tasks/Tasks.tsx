'use client'
import { NextPage } from 'next'
import styles from './Tasks.module.scss'
import Heading from '@/components/ui/heading/Heading'
import KanbanView from './kanban-view/KanbanView'
import Panel from './panel/Panel'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { TypeViewType } from '@/types/tasks.types'
import ListView from './list-view/ListView'
import { useGetTasks } from '@/api/hooks/tasks/useGetTasks'
import { useTasksEnd } from './hooks/useTasksEnd'
export interface IProps {
  projectId: string
}

const Tasks: NextPage<IProps> = ({ projectId }) => {
  const [viewType, setViewType, isLoading] = useLocalStorage<TypeViewType>({
    defaultValue: 'board',
    key: 'ViewType',
  })

  const { tasksData, isFetching, isSuccess, setTasksState, tasksState } =
    useGetTasks({ projectId })

  const { onDragEnd } = useTasksEnd({
    projectId,
    setTasksState,
    tasks: tasksState,
  })

  if (!tasksData || !tasksState) {
    return <div>Error</div>
  }
  return (
    <main className={styles.container}>
      <Heading text="Tasks" />
      <Panel setType={setViewType} type={viewType} projectId={projectId} />
      {viewType === 'board' && (
        <KanbanView
          tasksState={tasksState}
          onDragEnd={onDragEnd}
          projectId={projectId}
        />
      )}
      {viewType === 'list' && (
        <ListView
          tasksState={tasksState}
          onDragEnd={onDragEnd}
          projectId={projectId}
        />
      )}
    </main>
  )
}

export default Tasks
