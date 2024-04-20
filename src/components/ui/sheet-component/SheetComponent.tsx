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
import { ScrollArea } from '../shadcn/ui/scroll-area'
import { taskBadgeStyleFormat } from '../badges/task-priority-badge/utils'
import DateBadge from '../badges/date-badge/DateBadge'
import { Plus } from 'lucide-react'
import UserBadge from '../badges/user-badge/UserBadge'
import { membersData } from '@/data/members.data'
import cn from 'clsx'
import TaskStatusBadge from '../badges/task-status-badge/TaskStatusBadge'
import TabsComponent from '../tabs-component/TabsComponent'
import TasksBlock from './TasksBlock/TasksBlock'
import { useOutside } from '@/hooks/useOutside'
interface IProps {
  children: React.ReactNode
}

const SheetComponent: NextPage<IProps> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-2xl">Create Proquill</SheetTitle>
        </SheetHeader>
        <div className={styles.body}>
          <div className={styles.info}>
            <div className={styles.block}>
              <p className={styles.label}>Label</p>
              <div className={styles.group}>
                {taskBadgeStyleFormat('Low')}
                <span className={styles.icons}>
                  <Plus className={styles.icon} />
                </span>
              </div>
            </div>
            <ScrollArea className="w-full h-[70px]">
              <div className={cn(styles.block, styles.users)}>
                <p className={styles.label}>Assigneesers</p>
                {membersData.map((el) => {
                  return (
                    <UserBadge
                      fullName={el.fullName}
                      imgLink={el.imgLink || ''}
                    />
                  )
                })}
                <span className={styles.icons}>
                  <Plus className={styles.icon} />
                </span>
              </div>
            </ScrollArea>

            <div className={styles.block}>
              <p className={styles.label}>Status</p>
              <TaskStatusBadge status="In Queue" />
            </div>
            <div className={styles.block}>
              <p className={styles.label}>Due Date</p>
              <DateBadge />
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
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default SheetComponent
