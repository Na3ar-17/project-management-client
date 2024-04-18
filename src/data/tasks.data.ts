import { COLORS } from '@/constants/colors.constans'
import { ICategory } from '@/types/tasks.types'

const opacity = 0.105

export const tasksCategoryData: ICategory[] = [
  {
    title: 'In Queue',
    styles: {
      background: `rgba(255, 0, 0, ${opacity})`,
      border: `2px solid ${COLORS.red}`,
    },
  },
  {
    title: 'On Progress',
    styles: {
      background: `rgba(136, 117 ,11, ${opacity})`,
      border: `2px solid ${COLORS['dark-orange']}`,
    },
  },
  {
    title: 'Testing',
    styles: {
      background: `rgba(38, 139 ,255, ${opacity})`,
      border: `2px solid ${COLORS.blue}`,
    },
  },
  {
    title: 'Completed',
    styles: {
      background: `rgba(61, 192,25,${opacity})`,
      border: `2px solid ${COLORS['green-ligh2']}`,
    },
  },
]

export const simpleSelectData = [
  { value: 'Low', lable: 'Low' },
  { value: 'Normal', lable: 'Normal' },
  { value: 'High', lable: 'High' },
]
