import { COLORS } from '@/constants/colors.constans'
import {
  EnumTaskPriority,
  EnumTaskStatus,
  ICategory,
  IComment,
  ISubTask,
  ITaskCard,
  IViewType,
} from '@/types/tasks.types'
import { LayoutTemplate, List } from 'lucide-react'

//TODO create data for kanban card

const opacity = 0.105

export const tasksCategoryData: ICategory[] = [
  {
    label: 'In Queue',
    styles: {
      background: `rgba(255, 0, 0, ${opacity})`,
      border: `2px solid ${COLORS.red}`,
    },
    value: EnumTaskStatus.inQueue,
  },
  {
    label: 'On Progress',
    styles: {
      background: `rgba(136, 117 ,11, ${opacity})`,
      border: `2px solid ${COLORS['dark-orange']}`,
    },
    value: EnumTaskStatus.onProgress,
  },
  {
    label: 'Testing',
    styles: {
      background: `rgba(38, 139 ,255, ${opacity})`,
      border: `2px solid ${COLORS.blue}`,
    },
    value: EnumTaskStatus.testing,
  },
  {
    label: 'Completed',
    styles: {
      background: `rgba(61, 192,25,${opacity})`,
      border: `2px solid ${COLORS['green-ligh2']}`,
    },
    value: EnumTaskStatus.completed,
  },
]

export const simpleSelectData: { lable: string; value: EnumTaskPriority }[] = [
  { value: EnumTaskPriority.low, lable: 'Low' },
  { value: EnumTaskPriority.normal, lable: 'Normal' },
  { value: EnumTaskPriority.high, lable: 'High' },
]

export const commentsData: IComment[] = [
  {
    id: 'ad',
    text: 'Hello word',
    owner: null,
  },
  {
    id: 'ada',
    text: 'Some comment',
    owner: null,
  },
  {
    id: 'asasd',
    text: 'I will do layout',
    owner: null,
  },
  {
    id: 'adasdasd',
    text: 'Putin Hyilo',
    owner: null,
  },
]

export const viewTypesData: IViewType[] = [
  { Icon: LayoutTemplate, lable: 'Board', value: 'board' },
  { Icon: List, lable: 'List', value: 'list' },
]
