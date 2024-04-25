import { Crown, User, ShieldBanIcon } from 'lucide-react'
import styles from './utils.module.scss'

export const memberStatusFormat = (text: string) => {
  switch (text) {
    case 'Active':
      return <span className={styles['green-dot']}>{text}</span>

    default:
      return <span className={styles['red-dot']}>{text}</span>
  }
}

export const userRoleFormat = (text: string) => {
  switch (text) {
    case 'Creator':
      return (
        <span className={styles.role}>
          <Crown style={{ color: '#eae02a' }} className={styles.icon} />
          {text}
        </span>
      )

    case 'Admin':
      return (
        <span className={styles.role}>
          <ShieldBanIcon style={{ color: '#c62fff' }} className={styles.icon} />
          {text}
        </span>
      )
    default:
      return (
        <span className={styles.role}>
          <User className={styles.icon} />
          {text}
        </span>
      )
  }
}
