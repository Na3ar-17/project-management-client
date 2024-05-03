import { NextPage } from 'next'
import styles from './DateBadge.module.scss'
import { CalendarDays } from 'lucide-react'
import { isToday } from 'date-fns'
import cn from 'clsx'

interface IProps {
  date?: string
  deadLine?: string
  className?: string
}

const DateBadge: NextPage<IProps> = ({ date, deadLine, className }) => {
  return (
    <p className={cn(className, styles.badge)}>
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
