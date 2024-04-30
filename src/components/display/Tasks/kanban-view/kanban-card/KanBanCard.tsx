import { NextPage } from 'next'
import styles from './KanBanCard.module.scss'
import SheetComponent from '@/components/ui/sheet-component/SheetComponent'
import { taskBadgeStyleFormat } from '@/components/ui/badges/task-priority-badge/utils'
import DateBadge from '@/components/ui/badges/date-badge/DateBadge'
import ProgressComponent from '@/components/ui/progress/ProgressComponent'
import AvatarComponent from '@/components/ui/avatar/AvatarComponent'
import { MessageSquareText } from 'lucide-react'
import { ITaskCard } from '@/types/tasks.types'
import ContextMenuComponent from '@/components/ui/context-menu/ContextMenuComponent'
import { useSheet } from '@/zustand/useSheet'
interface IProps {
  data: ITaskCard
}

const KanBanCard: NextPage<IProps> = ({ data }) => {
  const { onOpen, setTaskId } = useSheet()

  const {
    assigneesers,
    description,
    dueDate,
    id,
    title,
    comments,
    createdAt,
    priority,
    subTasks,
    projectId,
  } = data

  return (
    <>
      <ContextMenuComponent isEdit={false} id={id} key={id}>
        <div className={styles.task}>
          <p
            className={styles.title}
            onClick={() => {
              setTaskId(id)
              onOpen()
            }}
          >
            {title}
          </p>
          <div className={styles['task_info']}>
            {taskBadgeStyleFormat(priority || '')}
            <DateBadge deadLine={dueDate} />
          </div>
          <p className={styles.description}>{description}</p>
          <ProgressComponent />
          {assigneesers && (
            <div className={styles.users}>
              <div className={styles.group}>
                {assigneesers.map((el, index) => {
                  return (
                    <div className={styles.user} key={index}>
                      <AvatarComponent
                        fullName={el.fullName}
                        imgLink={el.imgLink}
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
      </ContextMenuComponent>
      <SheetComponent projectId={projectId} taskId={id} taskData={data} />
    </>
  )
}

export default KanBanCard
