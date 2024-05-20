import { useDeleteTask } from '@/api/hooks/tasks/useDeleteTask'
import { useUpdateTaskDebounce } from '@/api/hooks/tasks/useUpdateTaskDebounce'
import DatePickerComponent from '@/components/ui/date-picker-component/DatePickerComponent'
import ProgressComponent from '@/components/ui/progress/ProgressComponent'
import SimpleSelect from '@/components/ui/selectors/simple-select/SimpleSelect'
import SheetComponent from '@/components/ui/sheet-component/SheetComponent'
import { cn } from '@/lib/utils'
import { IListAndTaskCardProps, TypeUpdateTaskCard } from '@/types/tasks.types'
import { Trash2 } from 'lucide-react'
import { NextPage } from 'next'
import { Controller, useForm } from 'react-hook-form'
import styles from './ListCard.module.scss'
import ListCardHeader from './ListCardHeader'

const ListCard: NextPage<IListAndTaskCardProps> = ({
  data,
  provided,
  setTasksState,
  snapshot: { isDragging },
}) => {
  const { project, index, ...rest } = data
  const { control, watch } = useForm<TypeUpdateTaskCard>({
    defaultValues: {
      ...rest,
    },
    mode: 'onChange',
  })
  const { deleteTaskMutation } = useDeleteTask()
  useUpdateTaskDebounce({
    projectId: data.projectId,
    taskId: data.id,
    watch,
    setTasksState,
  })
  return (
    <div
      className={cn(
        styles.row,
        data.isCompleted && styles.completed,
        isDragging && styles.dragging
      )}
    >
      <ListCardHeader
        props={{
          control,
          id: data.id,
          isCompleted: data.isCompleted,
          isDragging,
          provided,
        }}
      />
      <div className={styles.elemenet}>
        <ProgressComponent
          progressNumber={data.progressPercent}
          className="w-full"
          isSingle
        />
      </div>
      <div className={styles.elemenet}>
        <Controller
          control={control}
          name="dueDate"
          render={({ field: { value, onChange } }) => (
            <DatePickerComponent
              onChange={onChange}
              deadLine={value || ''}
              isSingle
              disabled={data.isCompleted}
            />
          )}
        />
      </div>
      <div className={styles.elemenet}>
        <Controller
          control={control}
          name="priority"
          render={({ field: { value, onChange } }) => (
            <SimpleSelect
              disabled={data.isCompleted}
              value={value || ''}
              onChange={onChange}
            />
          )}
        />
      </div>
      <div className={styles.elemenet}>
        <Trash2
          onClick={() =>
            deleteTaskMutation({ projectId: data.projectId, taskId: data.id })
          }
          className={styles.delete}
        />
      </div>
      <SheetComponent taskData={data} setTasksState={setTasksState} />
    </div>
  )
}

export default ListCard
