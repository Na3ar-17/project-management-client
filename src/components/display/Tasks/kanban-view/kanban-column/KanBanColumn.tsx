import { NextPage } from 'next'
import styles from './KanBanColumn.module.scss'
import { IListAndKanbanProps } from '@/types/tasks.types'
import { Draggable, Droppable } from '@hello-pangea/dnd'
import KanBanCard from '../kanban-card/KanBanCard'
import { filterTasks } from '../../utils/filter-tasks'
import { Columns2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const KanBanColumn: NextPage<IListAndKanbanProps> = ({
  category,
  tasks,
  setTasksState,
}) => {
  return (
    <>
      <Droppable droppableId={category.value}>
        {(provided, snapshot) => {
          return (
            <div className={cn(styles.group)}>
              <div className={styles.tab}>
                <div className={styles['tab-title']}>
                  <span
                    style={category.styles}
                    className={`${styles.mark}`}
                  ></span>
                  <p>{category.label}</p>
                </div>
                <Columns2 className={styles.icon} />
              </div>
              <div
                ref={provided.innerRef}
                className={cn(
                  styles.category,
                  snapshot.isDraggingOver && styles.draggingOver
                )}
              >
                <div className={styles.tasks}>
                  {filterTasks(tasks, category.value)?.map((card, index) => (
                    <Draggable
                      key={card.id}
                      draggableId={card.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <KanBanCard
                            setTasksState={setTasksState}
                            provided={provided}
                            snapshot={snapshot}
                            data={card}
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
    </>
  )
}

export default KanBanColumn
