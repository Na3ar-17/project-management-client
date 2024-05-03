import { NextPage } from 'next'
import styles from './Notification.module.scss'
import { DropdownMenuItem } from '@/components/ui/shadcn/ui/dropdown-menu'
import { MailQuestion } from 'lucide-react'
import DateBadge from '@/components/ui/badges/date-badge/DateBadge'
import UserBadge from '@/components/ui/badges/user-badge/UserBadge'
interface IProps {}

const Notification: NextPage<IProps> = ({}) => {
  return (
    <DropdownMenuItem className={styles.notification}>
      <div className={styles['left-side']}>
        <div className={styles.picture}>
          <MailQuestion className={styles.icon} />
        </div>
      </div>
      <div className={styles['right-side']}>
        <div className={styles.body}>
          <p className={styles.content}>
            Join our project, together we are power ))
          </p>
        </div>
        <div className={styles.footer}>
          <DateBadge date="03.05.2024" />
          <div className="flex gap-2 items-center">
            <p>from</p>
            <UserBadge
              clasName="cursor-pointer"
              fullName="Nazar Gavrylyk"
              imgLink="100926af15a5893fb1c.jpg"
            />
          </div>
        </div>
      </div>
    </DropdownMenuItem>
  )
}

export default Notification
