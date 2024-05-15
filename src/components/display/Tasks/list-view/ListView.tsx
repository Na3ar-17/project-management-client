import { NextPage } from 'next'
import styles from './ListView.module.scss'
import { DragDropContext, DropResult } from '@hello-pangea/dnd'
import { IViewTypesPros } from '@/types/tasks.types'
import { tasksCategoryData } from '@/data/tasks.data'
import ListColumn from './list-column/ListColumn'
import EmptyMessage from '@/components/ui/empty-message/EmptyMessage'
import Spinner from '@/components/ui/loaders/spinner/Spinner'
import { useTranslations } from 'next-intl'

const ListView: NextPage<IViewTypesPros> = ({
  onDragEnd,
  tasksState,
  setTasksState,
}) => {
  const t = useTranslations('Projects.Tasks')
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.content}>
        <div className={styles.info}>
          <p className={styles.title}>{t('structute.title')}</p>
          <p className={styles.title}>{t('structute.progress')}</p>
          <p className={styles.title}>{t('structute.date')}</p>
          <p className={styles.title}>{t('structute.priority')}</p>
        </div>
        {tasksState.length <= 0 ? (
          <EmptyMessage
            title={t('empty-message')}
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
