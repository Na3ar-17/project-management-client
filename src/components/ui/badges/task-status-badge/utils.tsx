import { tasksCategoryData } from '@/data/tasks.data'
import styles from './TaskStatusBadge.module.scss'

export const taskStatusBadgeFormat = (status: string) => {
  switch (status) {
    case 'inQueue':
      return (
        <span style={tasksCategoryData[0].styles} className={styles.status}>
          In Queue
        </span>
      )

    case 'onProgress':
      return (
        <span style={tasksCategoryData[1].styles} className={styles.status}>
          On Progress
        </span>
      )

    case 'testing':
      return (
        <span style={tasksCategoryData[2].styles} className={styles.status}>
          Testing
        </span>
      )

    case 'completed':
      return (
        <span style={tasksCategoryData[3].styles} className={styles.status}>
          Completed
        </span>
      )
    default:
      break
  }
}
