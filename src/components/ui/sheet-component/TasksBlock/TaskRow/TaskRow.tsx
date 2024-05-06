import { NextPage } from 'next'
import styles from './TaskRow.module.scss'
import CheckBox from '@/components/ui/check-boxes/check-box-standart/CheckBox'
import { ISubTask, TypeUpdateSubTask } from '@/types/tasks.types'
import cn from 'clsx'
import TransparentField from '@/components/ui/fields/transparent-field/TransparentField'
import { useSubTaskDebounce } from '@/api/hooks/subTasks/useSubTaskDebounce'
import { Controller, useForm } from 'react-hook-form'
import { Trash2 } from 'lucide-react'
import { useDeleteSubTask } from '@/api/hooks/subTasks/useDeleteSubTask'
import { Dispatch, SetStateAction } from 'react'

interface IProps {
  data: ISubTask
  setSubTaskData: Dispatch<SetStateAction<ISubTask[] | undefined>>
}

const TaskRow: NextPage<IProps> = ({ data, setSubTaskData }) => {
  const { isCompleted, title, id, taskId } = data

  const { watch, control, register } = useForm<TypeUpdateSubTask>({
    defaultValues: {
      title,
      isCompleted,
    },
    mode: 'onChange',
  })

  useSubTaskDebounce({ watch, taskId, id })

  const { deleteSubtaskMutation } = useDeleteSubTask()

  return (
    <li className={styles.item}>
      <Controller
        control={control}
        name="isCompleted"
        render={({ field: { onChange, value } }) => {
          return <CheckBox checked={value} onCheckedChange={onChange} />
        }}
      />
      <Trash2
        strokeWidth={1.7}
        className={styles.delete}
        onClick={() =>
          id
            ? deleteSubtaskMutation({ taskId, id })
            : setSubTaskData((prev) => prev?.slice(0, -1))
        }
      />
      <TransparentField
        {...register('title')}
        className={cn(isCompleted && styles.completed, styles.title)}
      />
    </li>
  )
}

export default TaskRow
