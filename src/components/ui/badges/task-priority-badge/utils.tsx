import styles from './TaskPriorityBadge.module.scss'

export const taskBadgeStyleFormat = (text: string) => {
  switch (text) {
    case 'Low':
      return <p className={styles.blue}>{text}</p>
    case 'Normal':
      return <p className={styles.green}>{text}</p>
    case 'High':
      return <p className={styles.red}>{text}</p>
    default:
      break
  }
}
