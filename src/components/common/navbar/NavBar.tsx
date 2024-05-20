'use client'
import { useGetAll } from '@/api/hooks/notifications/useGetAll'
import { useUser } from '@/api/hooks/user/useUser'
import AvatarComponent from '@/components/ui/avatar/AvatarComponent'
import NavBarSkeleton from '@/components/ui/skeletons/NavBarSkeleton/NavBarSkeleton'
import { TypeIsHidden } from '@/types/sideBar.type'
import cn from 'clsx'
import { Bell } from 'lucide-react'
import { NextPage } from 'next'
import DropDownNotificationMenu from '../drop-down-notification-menu/DropDownNotificationMenu'
import styles from './NavBar.module.scss'

interface IProps {
  isHidden: TypeIsHidden
}

const NavBar: NextPage<IProps> = ({ isHidden }) => {
  const { useGetProfile } = useUser()
  const { data, isFetching } = useGetProfile()

  const { isSuccess: isNotificationsDataSuccess, notificationsData } =
    useGetAll()

  if (isFetching) {
    return <NavBarSkeleton isHidden={isHidden} />
  }

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
          {!isNotificationsDataSuccess || !notificationsData ? (
            <div>error</div>
          ) : (
            notificationsData.length !== 0 && (
              <div className={styles['notifications-count']}>
                <p className={styles.indicator}>
                  {notificationsData.filter((el) => el.hasSeen == false).length}
                </p>
              </div>
            )
          )}
        </DropDownNotificationMenu>
        <div className={styles.avatar}>
          <AvatarComponent fullName={data?.fullName} imgLink={data?.imgLink} />
          <p>{data?.fullName.split(' ')[0]}</p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
