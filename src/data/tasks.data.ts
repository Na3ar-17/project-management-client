import { COLORS } from '@/constants/colors.constans'
import {
  EnumTaskPriority,
  EnumTaskStatus,
  ICategory,
  ISubTask,
  ITaskCard,
  IViewType,
} from '@/types/tasks.types'
import { LayoutTemplate, List } from 'lucide-react'

//TODO create data for kanban card

const opacity = 0.105

export const generateTasksCategoryData = ({
  t1,
  t2,
  t3,
  t4,
}: {
  t1: string
  t2: string
  t3: string
  t4: string
}) => {
  const tasksCategoryData: ICategory[] = [
    {
      label: t1,
      styles: {
        background: `rgba(255, 0, 0, ${opacity})`,
        border: `2px solid ${COLORS.red}`,
      },
      value: EnumTaskStatus.inQueue,
    },
    {
      label: t2,
      styles: {
        background: `rgba(136, 117 ,11, ${opacity})`,
        border: `2px solid ${COLORS['dark-orange']}`,
      },
      value: EnumTaskStatus.onProgress,
    },
    {
      label: t3,
      styles: {
        background: `rgba(38, 139 ,255, ${opacity})`,
        border: `2px solid ${COLORS.blue}`,
      },
      value: EnumTaskStatus.testing,
    },
    {
      label: t4,
      styles: {
        background: `rgba(61, 192,25,${opacity})`,
        border: `2px solid ${COLORS['green-ligh2']}`,
      },
      value: EnumTaskStatus.completed,
    },
  ]
  return { tasksCategoryData }
}

export const simpleSelectData: { lable: string; value: EnumTaskPriority }[] = [
  { value: EnumTaskPriority.low, lable: 'Low' },
  { value: EnumTaskPriority.normal, lable: 'Normal' },
  { value: EnumTaskPriority.high, lable: 'High' },
]

export const generateViewTypesData = ({
  t1,
  t2,
}: {
  t1: string
  t2: string
}) => {
  const viewTypesData: IViewType[] = [
    { Icon: LayoutTemplate, lable: t1, value: 'board' },
    { Icon: List, lable: t2, value: 'list' },
  ]
  return { viewTypesData }
}
