import { NextPage } from 'next'
import styles from './TaskRow.module.scss'
import CheckBox from '@/components/ui/check-boxes/check-box-standart/CheckBox'
import { ISubTask, TypeUpdateSubTask } from '@/types/tasks.types'
import cn from 'clsx'
import TransparentField from '@/components/ui/fields/transparent-field/TransparentField'
import { useSubTaskDebounce } from '@/api/hooks/subTasks/useSubTaskDebounce'
import { Controller, useForm } from 'react-hook-form'
import { Trash2 } from 'lucide-react'

interface IProps {
  data: ISubTask
}

const TaskRow: NextPage<IProps> = ({ data }) => {
  const { isCompleted, title, id, taskId } = data

  const { watch, control } = useForm<TypeUpdateSubTask>({
    defaultValues: {
      title,
      isCompleted,
    },
  })
  useSubTaskDebounce({ watch, taskId, id })

  return (
    <li className={styles.item}>
      <Controller
        control={control}
        name="isCompleted"
        render={({ field: { onChange, value } }) => {
          return <CheckBox checked={value} onCheckedChange={onChange} />
        }}
      />
      <Trash2 strokeWidth={1.7} className={styles.delete} />
      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, value } }) => (
          <TransparentField
            value={value}
            className={cn(isCompleted && styles.completed, styles.title)}
            onInputChange={onChange}
          />
        )}
      />
    </li>
  )
}

export default TaskRow
