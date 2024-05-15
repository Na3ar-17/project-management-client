'use client'
import { NextPage } from 'next'
import styles from './Dashboard.module.scss'
import Heading from '@/components/ui/heading/Heading'
import { generateBlockStatisticsData } from '@/data/dashboard.data'
import StatisticsBlock from './statistics-block/StatisticsBlock'
import { useGetStatistics } from '@/api/hooks/statistics/useGetStatistics'
import { useTranslations } from 'next-intl'
interface IProps {
  params: {
    slug: string
    id: string
  }
}

const Dashboard: NextPage<IProps> = ({ params }) => {
  const { id, slug } = params
  const { isFetching, isSuccess, statisticsData } = useGetStatistics(id)
  const t = useTranslations('Projects.Statistics')
  if (!isSuccess || !statisticsData) {
    // TODO handle this
    return <div>Errro</div>
  }

  const { blockStatisticsData } = generateBlockStatisticsData({
    stastistics: statisticsData,
    t1: t('tasks-completed'),
    t2: t('tasks-created'),
    t3: t('tasks-deleted'),
  })

  return (
    <div className={styles.container}>
      <Heading text={t('title')} styles="py-0 pb-2" />

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
