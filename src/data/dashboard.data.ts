import { COLORS } from '@/constants/colors.constans'
import { IBlockStatistics } from '@/types/dashboard.types'
import { Check, NotebookPen, BookX, Users } from 'lucide-react'

export const blockStatisticsData: IBlockStatistics[] = [
  {
    id: 'asdasd',
    background: COLORS['white-bodyli'],
    Icon: Check,
    title: 'Tasks Completed',
    value: 24,
    iconColor: COLORS.purple,
  },
  {
    id: 'aasd',
    background: COLORS['green-light'],
    Icon: NotebookPen,
    title: 'New Tasks Assigned',
    value: 4,
    iconColor: COLORS.green,
  },
  {
    id: 'asdasdasdasd',
    background: COLORS['light-orange'],
    Icon: BookX,
    title: 'Tasks Deleted',
    value: 10,
    iconColor: COLORS['dark-orange'],
  },
  {
    id: 'asdasd',
    background: COLORS['light-blue'],
    Icon: Users,
    title: 'Members',
    value: 5,
    iconColor: COLORS.blue,
  },
]
