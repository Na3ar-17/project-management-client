import { NextPage } from 'next'
import styles from './TasksBlock.module.scss'
import { subTaskRowData } from '@/data/tasks.data'
import { ScrollArea } from '../../shadcn/ui/scroll-area'
import TaskRow from './TaskRow/TaskRow'
import TransparentField from '../../fields/transparent-field/TransparentField'
import { ISubTask, TypeUpdateSubTask } from '@/types/tasks.types'
import { Controller, useForm } from 'react-hook-form'
import { useSubTaskDebounce } from '@/api/hooks/subTasks/useSubTaskDebounce'
import { Dispatch, SetStateAction } from 'react'
import ButtonSettings from '../../buttons/button-settings/ButtonSettings'
import { useCreateSubTask } from '@/api/hooks/subTasks/useCreateSubTask'
interface IProps {
  subTasksData: ISubTask[]
  setSubTaskData: Dispatch<SetStateAction<ISubTask[] | undefined>>
  taskId: string
}

const TasksBlock: NextPage<IProps> = ({
  subTasksData,
  setSubTaskData,
  taskId,
}) => {
  const addSubTask = () => {
    setSubTaskData((prev) => {
      if (!prev) return

      return [
        ...prev,
        {
          id: '',
          title: '',
          isCompleted: false,
          taskId: taskId,
        },
      ]
    })
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>Tasks Progress</p>
      <ul className={styles.list}>
        <ScrollArea type="hover" className="h-[120px] w-full">
          {subTasksData.map((el, index) => (
            <TaskRow key={index} data={el} />
          ))}
          {!subTasksData?.some((el) => !el.id) && (
            <ButtonSettings action={addSubTask} text="Title here..." />
          )}
        </ScrollArea>
      </ul>
    </div>
  )
}

export default TasksBlock
