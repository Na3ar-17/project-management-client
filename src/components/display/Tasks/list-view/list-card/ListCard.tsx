import { NextPage } from 'next'
import styles from './ListCard.module.scss'
import {
  EnumTaskStatus,
  IListAndTaskCardProps,
  TypeUpdateTaskCard,
} from '@/types/tasks.types'
import DateBadge from '@/components/ui/badges/date-badge/DateBadge'
import TaskPriorityBadge from '@/components/ui/badges/task-priority-badge/TaskPriorityBadge'
import { SquareArrowOutUpRight, Trash2 } from 'lucide-react'
import CheckBox from '@/components/ui/check-boxes/check-box-standart/CheckBox'
import DragIcon from '@/components/ui/icons/DragIcon'
import { useDialog } from '@/zustand/useDialog'
import { Controller, useForm } from 'react-hook-form'
import { useUpdateTaskDebounce } from '@/api/hooks/tasks/useUpdateTaskDebounce'
import DatePickerComponent from '@/components/ui/date-picker-component/DatePickerComponent'
import { cn } from '@/lib/utils'
import TransparentField from '@/components/ui/fields/transparent-field/TransparentField'
import { useState } from 'react'
import SimpleSelect from '@/components/ui/selectors/simple-select/SimpleSelect'
import { useDeleteTask } from '@/api/hooks/tasks/useDeleteTask'
import SheetComponent from '@/components/ui/sheet-component/SheetComponent'
import { useSheet } from '@/zustand/useSheet'

const ListCard: NextPage<IListAndTaskCardProps> = ({
  data,
  provided,
  snapshot: { isDragging },
}) => {
  const { id, title, dueDate, priority, status, projectId, isCompleted } = data

  const {
    control,
    watch,
    register,
    formState: { errors },
  } = useForm<TypeUpdateTaskCard>({
    defaultValues: {
      status,
      title,
      isCompleted,
      dueDate,
      priority,
    },
  })
  const { deleteTaskMutation } = useDeleteTask()
  useUpdateTaskDebounce({ projectId, taskId: id, watch })
  const { onOpen, setExpectedTaskId } = useSheet()

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
              <CheckBox checked={value} onCheckedChange={onChange} />
            )}
          />
          <SquareArrowOutUpRight
            onClick={() => {
              setExpectedTaskId(id)
              onOpen()
            }}
            className={styles.icon}
          />
        </div>
        <Controller
          control={control}
          name="title"
          render={({ field: { value, onChange } }) => (
            <TransparentField
              className={styles.title}
              value={value}
              onInputChange={onChange}
              lableStyle="w-[50%]"
            />
          )}
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
            />
          )}
        />
      </div>
      <div className={styles.elemenet}>
        <Controller
          control={control}
          name="priority"
          render={({ field: { value, onChange } }) => (
            <SimpleSelect value={value || ''} onChange={onChange} />
          )}
        />
      </div>
      <div className={styles.elemenet}>
        <Trash2
          onClick={() => deleteTaskMutation({ projectId, taskId: id })}
          className={styles.delete}
        />
      </div>
      <SheetComponent taskData={data} />
    </div>
  )
}

export default ListCard
