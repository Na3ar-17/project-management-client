import { NextPage } from 'next'
import styles from './DateBadge.module.scss'
import { CalendarDays } from 'lucide-react'
import { isToday } from 'date-fns'
import cn from 'clsx'

interface IProps {
  date?: string
  deadLine?: string
  className?: string
  isSingle?: boolean
}

const DateBadge: NextPage<IProps> = ({
  date,
  deadLine,
  className,
  isSingle = false,
}) => {
  return (
    <p className={cn(className, styles.badge)}>
      <CalendarDays className={styles.icon} />
      {isSingle ? (
        <span className={styles.date}>{deadLine}</span>
      ) : (
        <span className={styles.date}>
          {date ? date : ''} - {deadLine ? deadLine : ''}
        </span>
      )}
    </p>
  )
}

export default DateBadge
