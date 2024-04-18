import { NextPage } from 'next'
import styles from './Tasks.module.scss'
import Heading from '@/components/ui/heading/Heading'
import { BsThreeDots } from 'react-icons/bs'
import { tasksCategoryData } from '@/data/tasks.data'
import AvatarComponent from '@/components/ui/avatar/AvatarComponent'
import { membersData } from '@/data/members.data'
import { MessageSquareText } from 'lucide-react'
import DateBadge from '@/components/ui/badges/date-badge/DateBadge'
import SimpleSelect from '@/components/ui/selectors/simple-select/SimpleSelect'
import { taskBadgeStyleFormat } from '@/components/ui/badges/task-priority-badge/utils'
import ProgressComponent from '@/components/ui/progress/ProgressComponent'

const Tasks: NextPage = () => {
  return (
    <main className={styles.container}>
      <Heading text="Tasks" />
      <div className={styles.content}>
        {tasksCategoryData.map((category) => (
          <div className={styles.category}>
            <div className={styles.tab}>
              <div className={styles['tab-title']}>
                <span
                  style={category.styles}
                  className={`${styles.mark}`}
                ></span>
                <p>{category.title}</p>
              </div>
              <BsThreeDots className={styles.dots} />
            </div>
          </div>
        ))}
        <div className={styles.tasks}>
          <div className={styles.task}>
            <p className={styles.title}>Create Proquill</p>
            <div className={styles['task_info']}>
              <p>{taskBadgeStyleFormat('Normal')}</p>
              <DateBadge date="18 April 2024" />
            </div>
            <p className={styles.description}>
              Develop a modern project management app
            </p>
            <ProgressComponent />
            <div className={styles.users}>
              <div className={styles.group}>
                {membersData.map((el) => {
                  return (
                    <div className={styles.user}>
                      <AvatarComponent imgLink={el.imgLink} size={30} />
                    </div>
                  )
                })}
              </div>
              <div className={styles.icons}>
                <MessageSquareText className={styles.icon} />
                <span className={styles['messages-count']}>3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Tasks
