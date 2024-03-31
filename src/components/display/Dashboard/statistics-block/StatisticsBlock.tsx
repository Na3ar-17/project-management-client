import { NextPage } from 'next'
import styles from './StatisticsBlock.module.scss'
import { IBlockStatistics } from '@/types/dashboard.types'

const StatisticsBlock: NextPage<IBlockStatistics> = ({
  Icon,
  background,
  iconColor,
  id,
  title,
  value,
}) => {
  return (
    <div className={styles.block}>
      <div
        style={{ background: background }}
        className={styles['icon-container']}
      >
        <Icon style={{ color: iconColor }} className={styles.icon} />
      </div>
      <p>{title}</p>
      <span>{value < 10 ? `0${value}` : value}</span>
    </div>
  )
}

export default StatisticsBlock
