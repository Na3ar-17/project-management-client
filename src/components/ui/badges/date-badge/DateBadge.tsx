import { NextPage } from 'next'
import styles from './DateBadge.module.scss'
import { CalendarDays } from 'lucide-react'
import { isToday } from 'date-fns'

interface IProps {
  date?: string
  deadLine?: string
}

const DateBadge: NextPage<IProps> = ({ date, deadLine }) => {
  return (
    <p className={styles.badge}>
      <CalendarDays className={styles.icon} />
      {deadLine ? (
        <span className={styles.date}>
          {date} {!deadLine && '-'}
          {isToday(deadLine) ? '00.00.00' : deadLine}
        </span>
      ) : (
        <span className={styles.date}>{date}</span>
      )}
    </p>
  )
}

export default DateBadge
