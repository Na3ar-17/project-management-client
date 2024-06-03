'use client'
import { useGetStatistics } from '@/api/hooks/statistics/useGetStatistics'
import Heading from '@/components/ui/heading/Heading'
import { useGenerateBlockStatisticsData } from '@/data/dashboard.data'
import { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import styles from './Dashboard.module.scss'
import StatisticsBlock from './statistics-block/StatisticsBlock'
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

  const { blockStatisticsData } = useGenerateBlockStatisticsData({
    stastistics: statisticsData,
    t1: t('tasks-completed'),
    t2: t('tasks-created'),
    t3: t('tasks-deleted'),
  })

  if (!isSuccess || !statisticsData) {
    // TODO handle this
    return <div>Errro</div>
  }

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
