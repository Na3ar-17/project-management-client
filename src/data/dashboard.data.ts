import { COLORS } from '@/constants/colors.constans'
import { IBlockStatistics } from '@/types/dashboard.types'
import { IStatisticsResponse } from '@/types/statistics.types'
import { ITaskCard } from '@/types/tasks.types'
import { Check, NotebookPen, BookX, Users } from 'lucide-react'

export const generateBlockStatisticsData = ({
  stastistics,
}: {
  stastistics: IStatisticsResponse
}) => {
  const blockStatisticsData: IBlockStatistics[] = [
    {
      background: COLORS['white-bodyli'],
      Icon: Check,
      title: 'Tasks Completed',
      value: stastistics.tasksCompleted,
      iconColor: COLORS.purple,
    },
    {
      background: COLORS['green-light'],
      Icon: NotebookPen,
      title: 'New Tasks Created',
      value: stastistics.project.tasks.length,
      iconColor: COLORS.green,
    },
    {
      background: COLORS['light-orange'],
      Icon: BookX,
      title: 'Tasks Deleted',
      value: stastistics.tasksDeleted,
      iconColor: COLORS['dark-orange'],
    },
  ]

  return blockStatisticsData
}
