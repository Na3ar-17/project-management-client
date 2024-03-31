import { NextPage } from 'next'
import styles from './Dashboard.module.scss'
import Heading from '@/components/ui/heading/Heading'
import { Check } from 'lucide-react'
import { blockStatisticsData } from '@/data/dashboard.data'
import StatisticsBlock from './statistics-block/StatisticsBlock'

const Dashboard: NextPage = () => {
  return (
    <div className={styles.container}>
      <Heading text="Statistics" styles="py-0 pb-2" />

      <div className={styles.statistics}>
        <div className={styles.row}>
          {blockStatisticsData.map((block, index) => (
            <StatisticsBlock
              key={index}
              Icon={block.Icon}
              background={block.background}
              iconColor={block.iconColor}
              title={block.title}
              value={block.value}
              id={block.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
