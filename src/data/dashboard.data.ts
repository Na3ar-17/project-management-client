import { COLORS } from '@/constants/colors.constans'
import { IBlockStatistics } from '@/types/dashboard.types'
import { IStatisticsResponse } from '@/types/statistics.types'
import { Check, NotebookPen, BookX, Users } from 'lucide-react'

export const generateBlockStatisticsData = (props: IStatisticsResponse) => {
  const blockStatisticsData: IBlockStatistics[] = [
    {
      id: 'asdasd',
      background: COLORS['white-bodyli'],
      Icon: Check,
      title: 'Tasks Completed',
      value: props.tasksCompleted,
      iconColor: COLORS.purple,
    },
    {
      id: 'aasd',
      background: COLORS['green-light'],
      Icon: NotebookPen,
      title: 'New Tasks Assigned',
      value: props.tasksCreated,
      iconColor: COLORS.green,
    },
    {
      id: 'asdasdasdasd',
      background: COLORS['light-orange'],
      Icon: BookX,
      title: 'Tasks Deleted',
      value: props.tasksDeleted,
      iconColor: COLORS['dark-orange'],
    },
  ]

  return blockStatisticsData
}
