import { COLORS } from '@/constants/colors.constans'
import { ICategory, IComment, ITaskRowData } from '@/types/tasks.types'

const opacity = 0.105

export const tasksCategoryData: ICategory[] = [
  {
    label: 'In Queue',
    styles: {
      background: `rgba(255, 0, 0, ${opacity})`,
      border: `2px solid ${COLORS.red}`,
    },
    value: 'in-queue',
  },
  {
    label: 'On Progress',
    styles: {
      background: `rgba(136, 117 ,11, ${opacity})`,
      border: `2px solid ${COLORS['dark-orange']}`,
    },
    value: 'on-progress',
  },
  {
    label: 'Testing',
    styles: {
      background: `rgba(38, 139 ,255, ${opacity})`,
      border: `2px solid ${COLORS.blue}`,
    },
    value: 'testing',
  },
  {
    label: 'Completed',
    styles: {
      background: `rgba(61, 192,25,${opacity})`,
      border: `2px solid ${COLORS['green-ligh2']}`,
    },
    value: 'completed',
  },
]

export const simpleSelectData = [
  { value: 'Low', lable: 'Low' },
  { value: 'Normal', lable: 'Normal' },
  { value: 'High', lable: 'High' },
]

export const taskRowData: ITaskRowData[] = [
  {
    isCompleted: false,
    title: 'Ui SideBar design',
  },
  {
    isCompleted: true,
    title: 'Coding',
  },
  {
    isCompleted: true,
    title: 'Coding',
  },
  {
    isCompleted: true,
    title: 'Coding',
  },
  {
    isCompleted: false,
    title: 'Ui SideBar design',
  },
  {
    isCompleted: false,
    title: 'Ui SideBar design',
  },
  {
    isCompleted: false,
    title: 'Ui SideBar design',
  },
]

export const commentsData: IComment[] = [
  {
    id: 'ad',
    text: 'Hello word',
  },
  {
    id: 'ada',
    text: 'Some comment',
  },
  {
    id: 'asasd',
    text: 'I will do layout',
  },
  {
    id: 'adasdasd',
    text: 'Putin Hyilo',
  },
]
