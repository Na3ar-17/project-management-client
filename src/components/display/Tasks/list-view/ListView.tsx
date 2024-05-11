import { NextPage } from 'next'
import styles from './ListView.module.scss'
import { DragDropContext, DropResult } from '@hello-pangea/dnd'
import { IViewTypesPros } from '@/types/tasks.types'
import { tasksCategoryData } from '@/data/tasks.data'
import ListColumn from './list-column/ListColumn'

const ListView: NextPage<IViewTypesPros> = ({
  onDragEnd,
  projectId,
  tasksState,
}) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.content}>
        <div className={styles.info}>
          <p className={styles.title}>Task title</p>
          <p className={styles.title}>Task progres</p>
          <p className={styles.title}>Due date</p>
          <p className={styles.title}>Priority</p>
        </div>
        {tasksState.length <= 0 ? (
          // Create cool message about empty tasks
          <div>No elenemts</div>
        ) : (
          tasksCategoryData.map((category, index) => (
            <ListColumn key={index} category={category} tasks={tasksState} />
          ))
        )}
      </div>
    </DragDropContext>
  )
}

export default ListView
