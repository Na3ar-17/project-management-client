import { useUpdateTaskDebounce } from '@/api/hooks/tasks/useUpdateTaskDebounce'
import { ITaskCard, TypeUpdateTaskCard } from '@/types/tasks.types'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { NextPage } from 'next'
import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { SheetContent } from '../../shadcn/ui/sheet'
import Body from './Body/Body'
import styles from './Content.module.scss'
import Header from './Header/Header'

interface IProps {
  data: ITaskCard
  expectedTaskId: string
  setTasksState: Dispatch<SetStateAction<ITaskCard[] | undefined>>
}

const Content: NextPage<IProps> = ({ data, expectedTaskId, setTasksState }) => {
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

  useUpdateTaskDebounce({
    watch,
    projectId: data.projectId,
    taskId: data.id,
    setTasksState,
  })

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
