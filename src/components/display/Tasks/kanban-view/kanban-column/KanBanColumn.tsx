import { NextPage } from 'next'
import styles from './KanBanColumn.module.scss'
import { BsThreeDots } from 'react-icons/bs'
import { EnumTaskStatus, ICategory, ITaskCard } from '@/types/tasks.types'
import { Draggable, Droppable } from '@hello-pangea/dnd'
import KanBanCard from '../kanban-card/KanBanCard'
import { filterTasks } from '../../utils/filter-tasks'
import AddCard from '../add-card/AddCard'
import SheetComponent from '@/components/ui/sheet-component/SheetComponent'
import { Columns2, Columns4 } from 'lucide-react'
interface IProps {
  category: ICategory
  tasks: ITaskCard[]
}

const KanBanColumn: NextPage<IProps> = ({ category, tasks }) => {
  return (
    <>
      <Droppable droppableId={category.value}>
        {(provided) => (
          <div className={styles.group}>
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
              {...provided.droppableProps}
              className={styles.category}
            >
              <div className={styles.tasks}>
                {filterTasks(tasks, category.value)?.map((card, index) => (
                  <Draggable key={card.id} draggableId={card.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <KanBanCard data={card} key={index} />
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </>
  )
}

export default KanBanColumn
