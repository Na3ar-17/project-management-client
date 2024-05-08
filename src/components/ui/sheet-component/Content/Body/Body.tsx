import { NextPage } from 'next'
import styles from './Body.module.scss'
import TaskStatusBadge from '@/components/ui/badges/task-status-badge/TaskStatusBadge'
import UserBadge from '@/components/ui/badges/user-badge/UserBadge'
import DatePickerComponent from '@/components/ui/date-picker-component/DatePickerComponent'
import SimpleSelect from '@/components/ui/selectors/simple-select/SimpleSelect'
import TabsComponent from '@/components/ui/tabs-component/TabsComponent'
import { membersData } from '@/data/members.data'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import { Control, Controller } from 'react-hook-form'
import TasksBlock from '../../TasksBlock/TasksBlock'
import { ITaskCard, TypeUpdateTaskCard } from '@/types/tasks.types'
import { useGetAll } from '@/api/hooks/subTasks/useGetAll'
import { useProjectOwner } from '@/api/hooks/project/useProjectOwner'

interface IProps {
  control: Control<TypeUpdateTaskCard>
  data: ITaskCard
  isOwner: boolean
}

const Body: NextPage<IProps> = ({ control, data, isOwner }) => {
  const {
    id,
    projectId,
    project: { members },
  } = data

  const { isFetching, isSuccess, subtaskData, setSubtaskData } = useGetAll(id)

  return (
    <div className={styles.body}>
      <div className={styles.info}>
        <div className={styles.block}>
          <p className={styles.label}>Label</p>
          <div className={styles.group}>
            <Controller
              name="priority"
              control={control}
              render={({ field: { onChange, value } }) => (
                <SimpleSelect
                  disabled={!isOwner}
                  value={value || ''}
                  onChange={onChange}
                />
              )}
            />
          </div>
        </div>
        {data.assigneesers && (
          <div className={cn(styles.block, styles.users)}>
            <p className={styles.label}>Assigneesers</p>
            {data.assigneesers.map((el, index) => {
              return (
                <UserBadge
                  fullName={el.user.fullName}
                  imgLink={el.user.imgLink || ''}
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
          <TaskStatusBadge status={data.status} />
        </div>
        <div className={styles.block}>
          <p className={styles.label}>Due Date</p>
          <Controller
            control={control}
            name="dueDate"
            render={({ field: { onChange, value } }) => (
              <DatePickerComponent
                disabled={!isOwner}
                isSingle
                onChange={onChange}
                deadLine={value || ''}
              />
            )}
          />
        </div>
        {members.length >= 2 && (
          <div className={styles.block}>
            <p className={styles.label}>Created By</p>
            <UserBadge fullName="Nazar Gavrylyk" imgLink={''} />
          </div>
        )}
      </div>
      <TabsComponent isOwner={isOwner} data={data} control={control} />
      {!isSuccess || !subtaskData ? (
        //TODO handle errors
        <div>Error</div>
      ) : (
        <TasksBlock
          subTasksData={subtaskData}
          setSubTaskData={setSubtaskData}
          taskId={data.id}
          isOwner={isOwner}
        />
      )}
    </div>
  )
}

export default Body
