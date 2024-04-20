import { NextPage } from 'next'
import styles from './TasksBlock.module.scss'
import { subTaskRowData } from '@/data/tasks.data'
import { ScrollArea } from '../../shadcn/ui/scroll-area'
import TaskRow from './TaskRow/TaskRow'
interface IProps {}

const TasksBlock: NextPage<IProps> = ({}) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Tasks Progress</p>
      <ul className={styles.list}>
        <ScrollArea type="hover" className="h-[120px] ">
          {subTaskRowData.map((el, index) => (
            <TaskRow key={index} data={el} />
          ))}
        </ScrollArea>
      </ul>
    </div>
  )
}

export default TasksBlock
