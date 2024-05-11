import { NextPage } from 'next'
import styles from './ListCard.module.scss'
import {
  EnumTaskStatus,
  IListAndTaskCardProps,
  TypeUpdateTaskCard,
} from '@/types/tasks.types'
import DateBadge from '@/components/ui/badges/date-badge/DateBadge'
import TaskPriorityBadge from '@/components/ui/badges/task-priority-badge/TaskPriorityBadge'
import { Trash2 } from 'lucide-react'
import CheckBox from '@/components/ui/check-boxes/check-box-standart/CheckBox'
import DragIcon from '@/components/ui/icons/DragIcon'
import { useDialog } from '@/zustand/useDialog'
import { Controller, useForm } from 'react-hook-form'
import { useUpdateTaskDebounce } from '@/api/hooks/tasks/useUpdateTaskDebounce'
import DatePickerComponent from '@/components/ui/date-picker-component/DatePickerComponent'
import { cn } from '@/lib/utils'

const ListCard: NextPage<IListAndTaskCardProps> = ({
  data,
  provided,
  snapshot: { isDragging },
}) => {
  const { id, title, dueDate, priority, status, projectId, isCompleted } = data
  console.log(dueDate)

  const { control, watch } = useForm<TypeUpdateTaskCard>({
    defaultValues: {
      status,
      title,
      isCompleted,
      dueDate,
    },
  })
  const { onOpen } = useDialog()

  useUpdateTaskDebounce({ projectId, taskId: id, watch })

  return (
    <div className={cn(styles.row, isCompleted && styles.completed)}>
      <div className={styles.elemenet}>
        <div className={styles.actions}>
          <div {...provided.dragHandleProps}>
            <DragIcon isDragging={isDragging} />
          </div>
          <Controller
            control={control}
            name="isCompleted"
            render={({ field: { value, onChange } }) => (
              <CheckBox checked={isCompleted} onCheckedChange={onChange} />
            )}
          />
        </div>
        <p className={styles.title}>{title}</p>
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
            />
          )}
        />
      </div>
      <div className={styles.elemenet}>
        <TaskPriorityBadge text={priority || ''} />
      </div>
      <div className={styles.elemenet}>
        <Trash2 className={styles.delete} />
      </div>
    </div>
  )
}

export default ListCard
