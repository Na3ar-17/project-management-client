import { NextPage } from 'next'
import styles from './KanBanColumn.module.scss'
import { BsThreeDots } from 'react-icons/bs'
import { EnumTaskStatus, ICategory, ITaskCard } from '@/types/tasks.types'
import { Draggable, Droppable } from '@hello-pangea/dnd'
import KanBanCard from '../kanban-card/KanBanCard'
import { filterTasks } from '../../utils/filter-tasks'
import AddCard from '../add-card/AddCard'
import SheetComponent from '@/components/ui/sheet-component/SheetComponent'
interface IProps {
  category: ICategory
  tasks: ITaskCard[]
}

const KanBanColumn: NextPage<IProps> = ({ category, tasks }) => {
  return (
    <>
      <Droppable droppableId={category.value}>
        {(provided) => (
          <>
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={styles.category}
            >
              <div className={styles.tab}>
                <div className={styles['tab-title']}>
                  <span
                    style={category.styles}
                    className={`${styles.mark}`}
                  ></span>
                  <p>{category.label}</p>
                </div>
                <BsThreeDots className={styles.dots} />
              </div>
              <div className={styles.tasks}>
                {filterTasks(tasks, category.value)?.map((card, index) => (
                  <Draggable key={card.id} draggableId={card.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <KanBanCard data={card} />
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
              {provided.placeholder}
            </div>
          </>
        )}
      </Droppable>
    </>
  )
}

export default KanBanColumn
