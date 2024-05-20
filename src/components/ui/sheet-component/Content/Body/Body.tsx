import { useSubTask } from '@/api/hooks/subTasks/useSubTask'
import TaskStatusBadge from '@/components/ui/badges/task-status-badge/TaskStatusBadge'
import DatePickerComponent from '@/components/ui/date-picker-component/DatePickerComponent'
import TextAreaComponent from '@/components/ui/fields/text-area-component/TextAreaComponent'
import SimpleSelect from '@/components/ui/selectors/simple-select/SimpleSelect'
import { ITaskCard, TypeUpdateTaskCard } from '@/types/tasks.types'
import { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import { Control, Controller } from 'react-hook-form'
import TasksBlock from '../../TasksBlock/TasksBlock'
import styles from './Body.module.scss'

interface IProps {
  control: Control<TypeUpdateTaskCard>
  data: ITaskCard
}

const Body: NextPage<IProps> = ({ control, data }) => {
  const { id, projectId } = data
  const { useGetAll } = useSubTask()

  const { isFetching, isSuccess, subtaskData, setSubtaskData } = useGetAll(id)
  const t = useTranslations('Projects.Tasks.sheet-component')

  if (!isSuccess || !subtaskData) {
    return <div>Error</div>
  }
  return (
    <div className={styles.body}>
      <div className={styles.info}>
        <div className={styles.block}>
          <p className={styles.label}>{t('priority')}</p>
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
          <p className={styles.label}>{t('status')}</p>
          <TaskStatusBadge status={data.status} />
        </div>
        <div className={styles.block}>
          <p className={styles.label}>{t('date')}</p>
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
              placeholder={t('description')}
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
