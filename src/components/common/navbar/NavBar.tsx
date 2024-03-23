import { NextPage } from 'next'
import styles from './NavBar.module.scss'
import { Bell, MessageSquareText } from 'lucide-react'
import AvatarComponent from '@/components/ui/avatar/AvatarComponent'

const NavBar: NextPage = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Proquill</div>
      <div className={styles.user}>
        <Bell className={styles.icon} />
        <MessageSquareText className={styles.icon} />
        <div className={styles.avatar}>
          <AvatarComponent />
          <p>Nazar</p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
