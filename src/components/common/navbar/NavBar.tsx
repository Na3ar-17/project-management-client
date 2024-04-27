'use client'
import { NextPage } from 'next'
import styles from './NavBar.module.scss'
import { Bell, MessageSquareText } from 'lucide-react'
import AvatarComponent from '@/components/ui/avatar/AvatarComponent'
import { TypeIsHidden } from '@/types/sideBar.type'
import { useGetProfile } from '@/api/hooks/user/useGetProfile'

interface IProps {
  isHidden: TypeIsHidden
}

const NavBar: NextPage<IProps> = ({ isHidden }) => {
  const { data, isFetching, isSuccess } = useGetProfile()
  //TODO handle isFetching, isSuccess
  return (
    <nav
      style={{
        width: `${isHidden === 'false' ? 'calc(100% - 190px)' : '100%'}`,
      }}
      className={styles.nav}
    >
      <div className={styles.logo}>Proquill</div>
      <div className={styles.user}>
        <Bell className={styles.icon} />
        <MessageSquareText className={styles.icon} />
        <div className={styles.avatar}>
          <AvatarComponent fullName={data?.fullName} imgLink={data?.imgLink} />
          <p>Nazar</p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
