import { cn } from '@/lib/utils'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { Plus } from 'lucide-react'
import { NextPage } from 'next'
import { Controller, useForm } from 'react-hook-form'
import TaskStatusBadge from '../../badges/task-status-badge/TaskStatusBadge'
import UserBadge from '../../badges/user-badge/UserBadge'
import DatePickerComponent from '../../date-picker-component/DatePickerComponent'
import TransparentField from '../../fields/transparent-field/TransparentField'
import SimpleSelect from '../../selectors/simple-select/SimpleSelect'
import { SheetContent, SheetHeader, SheetTitle } from '../../shadcn/ui/sheet'
import TasksBlock from '../TasksBlock/TasksBlock'
import styles from './Content.module.scss'
import { ITaskCard, TypeUpdateTaskCard } from '@/types/tasks.types'
import { useUpdateTaskDebounce } from '@/api/hooks/tasks/useUpdateTaskDebounce'
import Header from './Header/Header'
import Body from './Body/Body'

interface IProps {
  data: ITaskCard
  expectedTaskId: string
}

const Content: NextPage<IProps> = ({ data, expectedTaskId }) => {
  const { control, register, watch } = useForm<TypeUpdateTaskCard>({
    mode: 'onChange',
    defaultValues: {
      priority: data.priority,
      title: data.title,
      status: data.status,
      dueDate: data.dueDate,
      description: data.description,
    },
  })

  useUpdateTaskDebounce({ watch, projectId: data.projectId, taskId: data.id })

  return (
    data.id === expectedTaskId && (
      <SheetContent className={styles.content}>
        <ScrollArea className="w-full h-full">
          <Header control={control} key={expectedTaskId} />
          <Body control={control} data={data} />
        </ScrollArea>
      </SheetContent>
    )
  )
}

export default Content
