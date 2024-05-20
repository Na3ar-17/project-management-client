import EmptyMessage from '@/components/ui/empty-message/EmptyMessage'
import Spinner from '@/components/ui/loaders/spinner/Spinner'
import { generateTasksCategoryData } from '@/data/tasks.data'
import { IViewTypesPros } from '@/types/tasks.types'
import { DragDropContext } from '@hello-pangea/dnd'
import { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import styles from './ListView.module.scss'
import ListColumn from './list-column/ListColumn'

const ListView: NextPage<IViewTypesPros> = ({
  onDragEnd,
  tasksState,
  setTasksState,
}) => {
  const t = useTranslations('Projects.Tasks')
  const { tasksCategoryData } = generateTasksCategoryData({
    t1: t('status.queue'),
    t2: t('status.on-progress'),
    t3: t('status.testing'),
    t4: t('status.completed'),
  })

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
