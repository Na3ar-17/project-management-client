import { NextPage } from 'next'
import styles from './TasksBlock.module.scss'
import { subTaskRowData } from '@/data/tasks.data'
import { ScrollArea } from '../../shadcn/ui/scroll-area'
import TaskRow from './TaskRow/TaskRow'
import TransparentField from '../../fields/transparent-field/TransparentField'
import { ISubTask } from '@/types/tasks.types'
interface IProps {
  subTasksData: ISubTask[]
}

const TasksBlock: NextPage<IProps> = ({ subTasksData }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Tasks Progress</p>
      <ul className={styles.list}>
        <ScrollArea type="hover" className="h-[120px]">
          {subTasksData.map((el, index) => (
            <TaskRow key={index} data={el} />
          ))}
          <TransparentField
            placeholder="Title here..."
            className="px-1 py-0.5 w-full mt-2"
            onInputChange={() => {}}
          />
        </ScrollArea>
      </ul>
    </div>
  )
}

export default TasksBlock
