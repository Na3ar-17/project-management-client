import { useDeleteTask } from '@/api/hooks/tasks/useDeleteTask'
import AvatarComponent from '@/components/ui/avatar/AvatarComponent'
import DateBadge from '@/components/ui/badges/date-badge/DateBadge'
import { taskBadgeStyleFormat } from '@/components/ui/badges/task-priority-badge/utils'
import ProgressComponent from '@/components/ui/progress/ProgressComponent'
import SheetComponent from '@/components/ui/sheet-component/SheetComponent'
import { EnumTaskStatus, ITaskCard } from '@/types/tasks.types'
import { textAbstract } from '@/utils/textAbstract'
import type {
  DraggableProvided,
  DraggableStateSnapshot,
} from '@hello-pangea/dnd'
import cn from 'clsx'
import { MessageSquareText } from 'lucide-react'
import { NextPage } from 'next'
import Header from './Header/Header'
import styles from './KanBanCard.module.scss'
interface IProps {
  data: ITaskCard
  provided: DraggableProvided
  snapshot: DraggableStateSnapshot
}

const KanBanCard: NextPage<IProps> = ({
  data,
  provided,
  snapshot: { isDragging },
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
      <SheetComponent taskData={data} />
    </>
  )
}

export default KanBanCard
