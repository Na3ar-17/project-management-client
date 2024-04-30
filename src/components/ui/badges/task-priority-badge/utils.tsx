import styles from './TaskPriorityBadge.module.scss'

export const taskBadgeStyleFormat = (text: string) => {
  switch (text) {
    case 'low':
      return <p className={styles.blue}>{text}</p>
    case 'normal':
      return <p className={styles.green}>{text}</p>
    case 'high':
      return <p className={styles.red}>{text}</p>
    default:
      break
  }
}
