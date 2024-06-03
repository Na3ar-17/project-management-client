import { COLORS } from '@/constants/colors.constans'
import { IBlockStatistics } from '@/types/dashboard.types'
import { IStatisticsResponse } from '@/types/statistics.types'
import { Check, NotebookPen, BookX } from 'lucide-react'

export const useGenerateBlockStatisticsData = ({
  stastistics,
  t1,
  t2,
  t3,
}: {
  stastistics: IStatisticsResponse | undefined
  t1: string
  t2: string
  t3: string
}) => {
  const blockStatisticsData: IBlockStatistics[] = [
    {
      background: COLORS['white-bodyli'],
      Icon: Check,
      title: t1,
      value: stastistics?.tasksCompleted || 0,
      iconColor: COLORS.purple,
    },
    {
      background: COLORS['green-light'],
      Icon: NotebookPen,
      title: t2,
      value: stastistics?.project.tasks.length || 0,
      iconColor: COLORS.green,
    },
    {
      background: COLORS['light-orange'],
      Icon: BookX,
      title: t3,
      value: stastistics?.tasksDeleted || 0,
      iconColor: COLORS['dark-orange'],
    },
  ]

  return { blockStatisticsData }
}
