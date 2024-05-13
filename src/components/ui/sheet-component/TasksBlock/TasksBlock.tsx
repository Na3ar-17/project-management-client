import { NextPage } from 'next'
import styles from './TasksBlock.module.scss'
import { ScrollArea } from '../../shadcn/ui/scroll-area'
import TaskRow from './TaskRow/TaskRow'
import { ISubTask } from '@/types/tasks.types'
import { Dispatch, SetStateAction } from 'react'

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
        <ScrollArea type="hover" className="h-[220px] w-full">
          {subTasksData.map((el, index) => (
            <TaskRow setSubTaskData={setSubTaskData} key={index} data={el} />
          ))}
          {!subTasksData?.some((el) => !el.id) && (
            <button onClick={addSubTask}>Title here ...</button>
          )}
        </ScrollArea>
      </ul>
    </div>
  )
}

export default TasksBlock
