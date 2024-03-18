import { NextPage } from 'next'
import styles from './NavBar.module.scss'
import { Bell, MessageSquareText } from 'lucide-react'
import Image from 'next/image'
import avatar from '../../../../public//avatar.jpg'

const NavBar: NextPage = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Proquill</div>
      <div className={styles.user}>
        <Bell className={styles.icon} />
        <MessageSquareText className={styles.icon} />
        <div className={styles.avatar}>
          <Image className={styles.img} src={avatar} alt="user" />
          <p>Nazar</p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
