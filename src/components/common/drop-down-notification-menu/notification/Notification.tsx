import { NextPage } from 'next'
import styles from './Notification.module.scss'
import { DropdownMenuItem } from '@/components/ui/shadcn/ui/dropdown-menu'
import { MailQuestion, Trash2 } from 'lucide-react'
import DateBadge from '@/components/ui/badges/date-badge/DateBadge'
import UserBadge from '@/components/ui/badges/user-badge/UserBadge'
import { INotifications } from '@/types/notifications.types'
import Button from '@/components/ui/buttons/button-confirm/Button'
import ButtonReject from '@/components/ui/buttons/button-reject/Button'
import { useDeleteNotification } from '@/api/hooks/notifications/useDeleteNotification'
interface IProps {
  data: INotifications
}

const Notification: NextPage<IProps> = ({ data }) => {
  const {
    content,
    createdAt,
    type,
    id,
    owner: { imgLink, fullName },
  } = data
  const { deleteNotificationMutation } = useDeleteNotification()

  return (
    <div className={styles.notification}>
      <div className={styles.group}>
        <div className={styles['left-side']}>
          <div className={styles.picture}>
            <MailQuestion className={styles.icon} />
          </div>
        </div>
        <div className={styles['right-side']}>
          <div className={styles.body}>
            <p className={styles.content}>{content}</p>
          </div>
          <div className={styles.footer}>
            <DateBadge date={createdAt} />
            <div className="flex gap-2 items-center">
              <p>from</p>
              <UserBadge
                clasName="cursor-pointer"
                fullName={fullName}
                imgLink={imgLink || ''}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <Trash2
          onClick={() => deleteNotificationMutation(id)}
          className={styles.icon}
        />
        <Button
          width={100}
          height={29}
          text="Confirm"
          type="button"
          className="text-center"
        />
        <ButtonReject
          width={100}
          height={29}
          text="Reject"
          type="button"
          className="text-center"
        />
      </div>
    </div>
  )
}

export default Notification
