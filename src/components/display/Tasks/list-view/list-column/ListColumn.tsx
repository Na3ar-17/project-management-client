import { IListAndKanbanProps } from '@/types/tasks.types'
import { Draggable, Droppable } from '@hello-pangea/dnd'
import { NextPage } from 'next'
import styles from './ListColumn.module.scss'
import { Columns2, List } from 'lucide-react'
import { filterTasks } from '../../utils/filter-tasks'
import ListCard from '../list-card/ListCard'

const ListColumn: NextPage<IListAndKanbanProps> = ({ category, tasks }) => {
  return (
    <div>
      <Droppable droppableId={category.value}>
        {(provided, snapshot) => {
          return (
            <div className={styles.group}>
              <div className={styles.tab}>
                <div className={styles['tab-title']}>
                  <span style={category.styles} className={styles.mark}></span>
                  <p className={styles.value}>{category.label}</p>
                </div>
                <List className={styles.icon} />
              </div>

              <div ref={provided.innerRef}>
                <div className={styles.tasks}>
                  {filterTasks(tasks, category.value)?.map((task, index) => (
                    <Draggable
                      key={task.id}
                      index={index}
                      draggableId={task.id}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <ListCard
                            data={task}
                            provided={provided}
                            snapshot={snapshot}
                            key={index}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
                {provided.placeholder}
              </div>
            </div>
          )
        }}
      </Droppable>
    </div>
  )
}

export default ListColumn
