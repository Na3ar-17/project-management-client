import { useDeleteTask } from '@/api/hooks/tasks/useDeleteTask'
import DateBadge from '@/components/ui/badges/date-badge/DateBadge'
import { taskBadgeStyleFormat } from '@/components/ui/badges/task-priority-badge/utils'
import ProgressComponent from '@/components/ui/progress/ProgressComponent'
import SheetComponent from '@/components/ui/sheet-component/SheetComponent'
import { EnumTaskStatus, IListAndTaskCardProps } from '@/types/tasks.types'
import { textAbstract } from '@/utils/textAbstract'
import cn from 'clsx'
import { NextPage } from 'next'
import Header from './Header/Header'
import styles from './KanBanCard.module.scss'

const KanBanCard: NextPage<IListAndTaskCardProps> = ({
  data,
  provided,
  snapshot: { isDragging },
  setTasksState,
}) => {
  const {
    id,
    description,
    dueDate,
    title,
    priority,
    projectId,
    progressPercent,
    status,
  } = data

  const { deleteTaskMutation } = useDeleteTask()

  return (
    <>
      <div
        className={cn(
          styles.task,
          isDragging && styles.dragging,
          status === EnumTaskStatus.completed && styles.completed
        )}
      >
        <Header
          id={id}
          title={title}
          provided={provided}
          isDragging={isDragging}
          onTaskDelete={() => deleteTaskMutation({ projectId, taskId: id })}
        />
        <div className={styles['task_info']}>
          {taskBadgeStyleFormat(priority || '')}
          <DateBadge isSingle deadLine={dueDate} />
        </div>
        <p className={styles.description}>{textAbstract(description, 50)}</p>
        <ProgressComponent progressNumber={progressPercent} />
      </div>
      <SheetComponent taskData={data} setTasksState={setTasksState} />
    </>
  )
}

export default KanBanCard
