import { ISubTask } from '@/types/tasks.types'
import { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import { Dispatch, SetStateAction } from 'react'
import { ScrollArea } from '../../shadcn/ui/scroll-area'
import TaskRow from './TaskRow/TaskRow'
import styles from './TasksBlock.module.scss'

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
  const t = useTranslations('Projects.Tasks.sheet-component')

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
      <p className={styles.title}>{t('tasks-progress')}</p>
      <ul className={styles.list}>
        <ScrollArea type="hover" className="h-[290px] w-full">
          {subTasksData.map((el, index) => (
            <TaskRow setSubTaskData={setSubTaskData} key={index} data={el} />
          ))}
          {!subTasksData?.some((el) => !el.id) && (
            <button onClick={addSubTask}>{t('title-here')}</button>
          )}
        </ScrollArea>
      </ul>
    </div>
  )
}

export default TasksBlock
