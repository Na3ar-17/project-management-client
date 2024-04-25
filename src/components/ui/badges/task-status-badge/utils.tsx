import { tasksCategoryData } from '@/data/tasks.data'
import styles from './TaskStatusBadge.module.scss'

export const taskStatusBadgeFormat = (status: string) => {
  switch (status) {
    case 'In Queue':
      return (
        <span style={tasksCategoryData[0].styles} className={styles.status}>
          {status}
        </span>
      )

    case 'On Progress':
      return (
        <span style={tasksCategoryData[1].styles} className={styles.status}>
          {status}
        </span>
      )

    case 'Testing':
      return (
        <span style={tasksCategoryData[2].styles} className={styles.status}>
          {status}
        </span>
      )

    case 'Completed':
      return (
        <span style={tasksCategoryData[3].styles} className={styles.status}>
          {status}
        </span>
      )
    default:
      break
  }
}
