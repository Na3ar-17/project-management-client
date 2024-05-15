import { NextPage } from 'next'
import styles from './ListView.module.scss'
import { DragDropContext, DropResult } from '@hello-pangea/dnd'
import { IViewTypesPros } from '@/types/tasks.types'
import { tasksCategoryData } from '@/data/tasks.data'
import ListColumn from './list-column/ListColumn'
import EmptyMessage from '@/components/ui/empty-message/EmptyMessage'
import Spinner from '@/components/ui/loaders/spinner/Spinner'

const ListView: NextPage<IViewTypesPros> = ({
  onDragEnd,
  tasksState,
  setTasksState,
}) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.content}>
        <div className={styles.info}>
          <p className={styles.title}>Task title</p>
          <p className={styles.title}>Task progress</p>
          <p className={styles.title}>Due date</p>
          <p className={styles.title}>Priority</p>
        </div>
        {tasksState.length <= 0 ? (
          <EmptyMessage
            title="You don't have any tasks"
            subTitle=""
            Loader={Spinner}
          />
        ) : (
          tasksCategoryData.map((category, index) => (
            <ListColumn
              setTasksState={setTasksState}
              key={index}
              category={category}
              tasks={tasksState}
            />
          ))
        )}
      </div>
    </DragDropContext>
  )
}

export default ListView
