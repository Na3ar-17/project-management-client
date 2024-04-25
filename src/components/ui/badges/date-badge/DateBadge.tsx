import { NextPage } from 'next'
import styles from './DateBadge.module.scss'
import { CalendarDays } from 'lucide-react'
interface IProps {
  date?: string
  deadLine?: string
}

const DateBadge: NextPage<IProps> = ({ date = '18 April 2024', deadLine }) => {
  return (
    <p className={styles.badge}>
      <CalendarDays className={styles.icon} />
      {deadLine ? (
        <span className={styles.date}>
          {date} - {deadLine}
        </span>
      ) : (
        <span className={styles.date}>{date}</span>
      )}
    </p>
  )
}

export default DateBadge
