import { Crown, User, ShieldBanIcon } from 'lucide-react'
import styles from './utils.module.scss'

export const userStatusFormat = (text: string) => {
  switch (text) {
    case 'Active':
      return <p className={styles['green-dot']}>{text}</p>

    default:
      return <p className={styles['red-dot']}>{text}</p>
  }
}

export const userRoleFormat = (text: string) => {
  switch (text) {
    case 'Creator':
      return (
        <p className={styles.role}>
          <Crown style={{ color: '#eae02a' }} className={styles.icon} />
          {text}
        </p>
      )

    case 'Moderator':
      return (
        <p className={styles.role}>
          <ShieldBanIcon style={{ color: '#c62fff' }} className={styles.icon} />
          {text}
        </p>
      )
    default:
      return (
        <p className={styles.role}>
          <User className={styles.icon} />
          {text}
        </p>
      )
  }
}
