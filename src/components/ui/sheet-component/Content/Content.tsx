import { membersData } from '@/data/members.data'
import { cn } from '@/lib/utils'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { Plus } from 'lucide-react'
import { NextPage } from 'next'
import { Control, Controller, useForm } from 'react-hook-form'
import TaskStatusBadge from '../../badges/task-status-badge/TaskStatusBadge'
import UserBadge from '../../badges/user-badge/UserBadge'
import DatePickerComponent from '../../date-picker-component/DatePickerComponent'
import TransparentField from '../../fields/transparent-field/TransparentField'
import SimpleSelect from '../../selectors/simple-select/SimpleSelect'
import { SheetContent, SheetHeader, SheetTitle } from '../../shadcn/ui/sheet'
import TabsComponent from '../../tabs-component/TabsComponent'
import TasksBlock from '../TasksBlock/TasksBlock'
import styles from './Content.module.scss'
import { ITaskCard, TypeUpdateTaskCard } from '@/types/tasks.types'
import { useUpdateTaskDebounce } from '@/api/hooks/tasks/useUpdateTaskDebounce'
import { Dispatch, SetStateAction, useEffect } from 'react'

interface IProps {
  data: ITaskCard
  taskId: string
}

const Content: NextPage<IProps> = ({ data, taskId }) => {
  const {
    assigneesers,
    createdBy,
    description,
    dueDate,
    id,
    projectId,
    status,
    title,
    priority,
  } = data
  const { control, register, watch } = useForm<TypeUpdateTaskCard>({
    mode: 'onChange',
    defaultValues: {
      priority: priority,
      title: title,
      status: status,
      assigneesers: assigneesers,
      dueDate: dueDate,
      description: description,
    },
  })

  useUpdateTaskDebounce({ watch, projectId, taskId: id })

  return (
    data.id === taskId && (
      <SheetContent className={styles.content}>
        <ScrollArea className="w-full h-full">
          <SheetHeader>
            <SheetTitle className="text-2xl">
              <Controller
                control={control}
                name="title"
                render={({ field: { onChange, value } }) => (
                  <TransparentField
                    className="w-full"
                    value={value}
                    onInputChange={onChange}
                  />
                )}
              />
            </SheetTitle>
          </SheetHeader>
          <div className={styles.body}>
            <div className={styles.info}>
              <div className={styles.block}>
                <p className={styles.label}>Label</p>
                <div className={styles.group}>
                  <Controller
                    name="priority"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <SimpleSelect value={value || ''} onChange={onChange} />
                    )}
                  />
                </div>
              </div>
              {assigneesers && (
                <div className={cn(styles.block, styles.users)}>
                  <p className={styles.label}>Assigneesers</p>
                  {assigneesers.map((el, index) => {
                    return (
                      <UserBadge
                        fullName={el.fullName}
                        imgLink={el.imgLink || ''}
                        key={index}
                      />
                    )
                  })}
                  <span className={styles.icons}>
                    <Plus className={styles.icon} />
                  </span>
                </div>
              )}

              <div className={styles.block}>
                <p className={styles.label}>Status</p>
                <TaskStatusBadge status={status} />
              </div>
              <div className={styles.block}>
                <p className={styles.label}>Due Date</p>
                <Controller
                  control={control}
                  name="dueDate"
                  render={({ field: { onChange, value } }) => (
                    <DatePickerComponent
                      onChange={onChange}
                      end={value || ''}
                    />
                  )}
                />
              </div>
              {assigneesers && (
                <div className={styles.block}>
                  <p className={styles.label}>Created By</p>
                  <UserBadge
                    fullName="Nazar Gavrylyk"
                    imgLink={membersData[1].imgLink || ''}
                  />
                </div>
              )}
            </div>
            <TabsComponent />
            <TasksBlock />
          </div>
        </ScrollArea>
      </SheetContent>
    )
  )
}

export default Content
