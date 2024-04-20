import { NextPage } from 'next'
import styles from './DateBadge.module.scss'
import { CalendarDays } from 'lucide-react'
interface IProps {
  date?: string
  deadLine?: string
}

const DateBadge: NextPage<IProps> = ({ date = '18 April 2024', deadLine }) => {
  return (
    <span className={styles.badge}>
      <CalendarDays className={styles.icon} />
      {deadLine ? (
        <p className={styles.date}>
          {date} - {deadLine}
        </p>
      ) : (
        <p className={styles.date}>{date}</p>
      )}
    </span>
  )
}

export default DateBadge
