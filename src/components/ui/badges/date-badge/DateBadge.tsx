import cn from 'clsx'
import { CalendarDays } from 'lucide-react'
import { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import styles from './DateBadge.module.scss'

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
  const t = useTranslations('DatePicker')
  return (
    <p className={cn(className, styles.badge)}>
      <CalendarDays className={styles.icon} />
      {isSingle ? (
        <span className={styles.date}>
          {deadLine === '' ? t('1') : deadLine}
        </span>
      ) : (
        <span className={styles.date}>
          {date ? date : ''} - {deadLine ? deadLine : ''}
        </span>
      )}
    </p>
  )
}

export default DateBadge
