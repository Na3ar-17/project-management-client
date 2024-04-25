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
interface IProps {
  data: ITaskCard
}

const SheetComponent: NextPage<IProps> = ({ data }) => {
  const { isOpen, onClose } = useSheet()
  const {
    priority,
    assigneesers,
    createdBy,
    descripton,
    dueDate,
    id,
    status,
    title,
    subTasks,
    comments,
  } = data
  const { control, register } = useForm<TypeUpdateTaskCard>({
    mode: 'onChange',
    defaultValues: {
      priority: priority,
    },
  })

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className={styles.content}>
        <ScrollArea className="w-full h-full">
          <SheetHeader>
            <SheetTitle className="text-2xl">{title}</SheetTitle>
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

              <div className={styles.block}>
                <p className={styles.label}>Status</p>
                <TaskStatusBadge status={status} />
              </div>
              <div className={styles.block}>
                <p className={styles.label}>Due Date</p>
                <DateBadge deadLine={dueDate} />
              </div>
              <div className={styles.block}>
                <p className={styles.label}>Created By</p>
                <UserBadge
                  fullName="Nazar Gavrylyk"
                  imgLink={membersData[1].imgLink || ''}
                />
              </div>
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
