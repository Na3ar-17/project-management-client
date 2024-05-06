'use client'
import { NextPage } from 'next'
import styles from './NavBar.module.scss'
import { Bell, MessageSquareText } from 'lucide-react'
import AvatarComponent from '@/components/ui/avatar/AvatarComponent'
import { TypeIsHidden } from '@/types/sideBar.type'
import { useGetProfile } from '@/api/hooks/user/useGetProfile'
import DropDownNotificationMenu from '../drop-down-notification-menu/DropDownNotificationMenu'
import { useGetAll } from '@/api/hooks/notifications/useGetAll'
import cn from 'clsx'
interface IProps {
  isHidden: TypeIsHidden
}

const NavBar: NextPage<IProps> = ({ isHidden }) => {
  const { data, isFetching, isSuccess } = useGetProfile()
  const {
    isFetching: isNotificationsDataFetching,
    isSuccess: isNotificationsDataSuccess,
    notificationsData,
  } = useGetAll()

  //TODO handle isFetching, isSuccess

  if (!isNotificationsDataSuccess || !notificationsData) {
    return <div>Error</div>
  }

  return (
    <nav
      style={{
        width: `${isHidden === 'false' ? 'calc(100% - 190px)' : '100%'}`,
      }}
      className={styles.nav}
    >
      <div className={styles.logo}>Proquill</div>
      <div className={styles.user}>
        <DropDownNotificationMenu data={notificationsData}>
          <Bell className={cn(styles.icon)} />
          {notificationsData.length !== 0 && (
            <div className={styles['notifications-count']}>
              <p className={styles.indicator}>
                {notificationsData.filter((el) => el.hasSeen == false).length}
              </p>
            </div>
          )}
        </DropDownNotificationMenu>
        <MessageSquareText className={styles.icon} />
        <div className={styles.avatar}>
          <AvatarComponent fullName={data?.fullName} imgLink={data?.imgLink} />
          <p>{data?.fullName.split(' ')[0]}</p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
