'use client'
import { NextPage } from 'next'
import styles from './SheetComponent.module.scss'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../shadcn/ui/sheet'
import { ScrollArea, ScrollBar } from '../shadcn/ui/scroll-area'
import { taskBadgeStyleFormat } from '../badges/task-priority-badge/utils'
import DateBadge from '../badges/date-badge/DateBadge'
import { Plus } from 'lucide-react'
import UserBadge from '../badges/user-badge/UserBadge'
import { membersData } from '@/data/members.data'
import cn from 'clsx'
import TaskStatusBadge from '../badges/task-status-badge/TaskStatusBadge'
import TabsComponent from '../tabs-component/TabsComponent'
import TasksBlock from './TasksBlock/TasksBlock'
import SimpleSelect from '../selectors/simple-select/SimpleSelect'
import { useForm, Controller } from 'react-hook-form'
import { ITaskCard, TypeUpdateTaskCard } from '@/types/tasks.types'
import { useSheet } from '@/zustand/useSheet'
import SimpleField from '../fields/simple-field/SimpleField'
import TransparentField from '../fields/transparent-field/TransparentField'
import DatePickerComponent from '../date-picker-component/DatePickerComponent'
import { useUpdateTaskDebounce } from '@/api/hooks/tasks/useUpdateTaskDebounce'
interface IProps {
  data: ITaskCard
}

const SheetComponent: NextPage<IProps> = ({ data }) => {
  const { isOpen, onClose } = useSheet()
  const {
    priority,
    assigneesers,
    createdBy,
    description,
    dueDate,
    id,
    status,
    title,
    subTasks,
    comments,
    projectId,
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
    <Sheet open={isOpen} onOpenChange={onClose}>
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
    </Sheet>
  )
}

export default SheetComponent
