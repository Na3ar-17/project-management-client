import { NextPage } from 'next'
import styles from './KanBanCard.module.scss'
import SheetComponent from '@/components/ui/sheet-component/SheetComponent'
import { taskBadgeStyleFormat } from '@/components/ui/badges/task-priority-badge/utils'
import DateBadge from '@/components/ui/badges/date-badge/DateBadge'
import ProgressComponent from '@/components/ui/progress/ProgressComponent'
import { membersData } from '@/data/members.data'
import AvatarComponent from '@/components/ui/avatar/AvatarComponent'
import { MessageSquareText } from 'lucide-react'
interface IProps {}

const KanBanCard: NextPage<IProps> = ({}) => {
  return (
    <div className={styles.task}>
      <SheetComponent>
        <p className={styles.title}>Create Proquill</p>
      </SheetComponent>
      <div className={styles['task_info']}>
        <p>{taskBadgeStyleFormat('Normal')}</p>
        <DateBadge />
      </div>
      <p className={styles.description}>
        Develop a modern project management app
      </p>
      <ProgressComponent />
      <div className={styles.users}>
        <div className={styles.group}>
          {membersData.map((el) => {
            return (
              <div className={styles.user}>
                <AvatarComponent imgLink={el.imgLink} size={30} />
              </div>
            )
          })}
        </div>
        <div className={styles.icons}>
          <MessageSquareText className={styles.icon} />
          <span className={styles['messages-count']}>3</span>
        </div>
      </div>
    </div>
  )
}

export default KanBanCard
