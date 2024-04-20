import { NextPage } from 'next'
import styles from './KanBanColumn.module.scss'
import { BsThreeDots } from 'react-icons/bs'
import { ICategory } from '@/types/tasks.types'
import { Draggable, Droppable } from '@hello-pangea/dnd'
import KanBanCard from '../kanban-card/KanBanCard'
interface IProps {
  category: ICategory
}

const KanBanColumn: NextPage<IProps> = ({ category }) => {
  return (
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
              <KanBanCard />
              <KanBanCard />
            </div>
          </div>
        </>
      )}
    </Droppable>
  )
}

export default KanBanColumn
