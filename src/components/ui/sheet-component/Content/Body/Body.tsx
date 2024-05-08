import { NextPage } from 'next'
import styles from './Body.module.scss'
import TaskStatusBadge from '@/components/ui/badges/task-status-badge/TaskStatusBadge'
import DatePickerComponent from '@/components/ui/date-picker-component/DatePickerComponent'
import SimpleSelect from '@/components/ui/selectors/simple-select/SimpleSelect'
import { Control, Controller } from 'react-hook-form'
import TasksBlock from '../../TasksBlock/TasksBlock'
import { ITaskCard, TypeUpdateTaskCard } from '@/types/tasks.types'
import { useGetAll } from '@/api/hooks/subTasks/useGetAll'
import TextAreaComponent from '@/components/ui/fields/text-area-component/TextAreaComponent'

interface IProps {
  control: Control<TypeUpdateTaskCard>
  data: ITaskCard
}

const Body: NextPage<IProps> = ({ control, data }) => {
  const { id, projectId } = data

  const { isFetching, isSuccess, subtaskData, setSubtaskData } = useGetAll(id)

  if (!isSuccess || !subtaskData) {
    // TODO handle this
    return <div>Error</div>
  }
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
                <SimpleSelect value={value || ''} onChange={onChange} />
              )}
            />
          </div>
        </div>

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
                isSingle
                onChange={onChange}
                deadLine={value || ''}
              />
            )}
          />
        </div>
      </div>
      <div>
        <Controller
          control={control}
          name="description"
          render={({ field: { value, onChange } }) => (
            <TextAreaComponent
              value={value || ''}
              onTextAreaChange={onChange}
            />
          )}
        />
      </div>
      <TasksBlock
        subTasksData={subtaskData}
        setSubTaskData={setSubtaskData}
        taskId={data.id}
      />
    </div>
  )
}

export default Body
