import { COLORS } from '@/constants/colors.constans'
import {
  EnumTaskPriority,
  EnumTaskStatus,
  ICategory,
  IComment,
  ISubTaskRow,
  ITaskCard,
  IViewType,
} from '@/types/tasks.types'
import { membersData } from './members.data'
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

export const simpleSelectData = [
  { value: 'Low', lable: 'Low' },
  { value: 'Normal', lable: 'Normal' },
  { value: 'High', lable: 'High' },
]

export const subTaskRowData: ISubTaskRow[] = [
  {
    isCompleted: false,
    id: '1',
    title: 'Ui SideBar design',
  },
  {
    isCompleted: true,
    id: '2',
    title: 'Coding',
  },
  {
    isCompleted: true,
    id: '3',
    title: 'Coding',
  },
  {
    isCompleted: true,
    id: '4',
    title: 'Coding',
  },
  {
    isCompleted: false,
    id: '55',
    title: 'Ui SideBar design',
  },
  {
    isCompleted: false,
    id: '6',
    title: 'Ui SideBar design',
  },
  {
    isCompleted: false,
    id: '7',
    title: 'Ui SideBar design',
  },
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

export const taskCardsData: ITaskCard[] = [
  {
    id: '1',
    title: 'Task 1',
    subTasks: [],
    priority: EnumTaskPriority.low,
    dueDate: '2024-04-25',
    createdBy: { id: 'user1', fullName: 'John Doe' },
    descripton: 'Description for task 1',
    assigneesers: membersData.slice(0, 2),
    comments: [],
    status: EnumTaskStatus.inQueue,
  },
  {
    id: '2',
    title: 'Task 2',
    subTasks: [],
    priority: EnumTaskPriority.normal,
    dueDate: '2024-04-26',
    createdBy: { id: 'user2', fullName: 'Jane Doe' },
    descripton: 'Description for task 2',
    assigneesers: membersData.slice(0, 4),
    comments: [],
    status: EnumTaskStatus.onProgress,
  },
  {
    id: '3',
    title: 'Task 3',
    subTasks: [],
    priority: EnumTaskPriority.high,
    dueDate: '2024-04-27',
    createdBy: { id: 'user1', fullName: 'John Doe' },
    descripton: 'Description for task 3',
    assigneesers: membersData.slice(0, 1),
    comments: [],
    status: EnumTaskStatus.completed,
  },
  {
    id: '4',
    title: 'Task 4',
    subTasks: [],
    priority: EnumTaskPriority.normal,
    dueDate: '2024-04-28',
    createdBy: { id: 'user2', fullName: 'Jane Doe' },
    descripton: 'Description for task 4',
    assigneesers: membersData.slice(0, 2),
    comments: [],
    status: EnumTaskStatus.testing,
  },
  {
    id: '5',
    title: 'Task 5',
    subTasks: [],
    priority: EnumTaskPriority.low,
    dueDate: '2024-04-29',
    createdBy: { id: 'user1', fullName: 'John Doe' },
    descripton: 'Description for task 5',
    assigneesers: membersData,
    comments: [],
    status: EnumTaskStatus.inQueue,
  },
]

export const viewTypesData: IViewType[] = [
  { Icon: LayoutTemplate, lable: 'Board', value: 'board' },
  { Icon: List, lable: 'List', value: 'list' },
]
