import { generateTasksCategoryData } from '@/data/tasks.data'
import styles from './TaskStatusBadge.module.scss'
import { useTranslations } from 'next-intl'

export const taskStatusBadgeFormat = (status: string) => {
  const t = useTranslations('Projects.Tasks')
  const { tasksCategoryData } = generateTasksCategoryData({
    t1: t('status.queue'),
    t2: t('status.on-progress'),
    t3: t('status.testing'),
    t4: t('status.completed'),
  })
  switch (status) {
    case 'inQueue':
      return (
        <span style={tasksCategoryData[0].styles} className={styles.status}>
          {t('status.queue')}
        </span>
      )

    case 'onProgress':
      return (
        <span style={tasksCategoryData[1].styles} className={styles.status}>
          {t('status.on-progress')}
        </span>
      )

    case 'testing':
      return (
        <span style={tasksCategoryData[2].styles} className={styles.status}>
          {t('status.testing')}
        </span>
      )

    case 'completed':
      return (
        <span style={tasksCategoryData[3].styles} className={styles.status}>
          {t('status.completed')}
        </span>
      )
    default:
      break
  }
}
