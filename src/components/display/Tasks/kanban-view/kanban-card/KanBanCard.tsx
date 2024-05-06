import { useDeleteTask } from '@/api/hooks/tasks/useDeleteTask'
import AvatarComponent from '@/components/ui/avatar/AvatarComponent'
import DateBadge from '@/components/ui/badges/date-badge/DateBadge'
import { taskBadgeStyleFormat } from '@/components/ui/badges/task-priority-badge/utils'
import ContextMenuComponent from '@/components/ui/context-menu/ContextMenuComponent'
import ProgressComponent from '@/components/ui/progress/ProgressComponent'
import SheetComponent from '@/components/ui/sheet-component/SheetComponent'
import { ITaskCard } from '@/types/tasks.types'
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
  const { assigneesers, description, dueDate, id, title, priority, projectId } =
    data

  const { deleteTaskMutation } = useDeleteTask()

  return (
    <>
      <div className={cn(styles.task, isDragging && styles.dragging)}>
        <Header
          id={id}
          title={title}
          provided={provided}
          isDragging={isDragging}
          onTaskDelete={() => deleteTaskMutation({ projectId, taskId: id })}
        />
        <div className={styles['task_info']}>
          {taskBadgeStyleFormat(priority || '')}
          <DateBadge deadLine={dueDate} />
        </div>
        <p className={styles.description}>{textAbstract(description, 50)}</p>
        <ProgressComponent />
        {assigneesers && (
          <div className={styles.users}>
            <div className={styles.group}>
              {assigneesers.map((el, index) => {
                return (
                  <div className={styles.user} key={index}>
                    <AvatarComponent
                      fullName={el.user.fullName}
                      imgLink={el.user.imgLink}
                      size={30}
                    />
                  </div>
                )
              })}
            </div>
            <div className={styles.icons}>
              <MessageSquareText className={styles.icon} />
              <span className={styles['messages-count']}>3</span>
            </div>
          </div>
        )}
      </div>
      <SheetComponent taskData={data} />
    </>
  )
}

export default KanBanCard
