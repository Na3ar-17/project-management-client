import { NextPage } from 'next'
import styles from './Tasks.module.scss'
import Heading from '@/components/ui/heading/Heading'
import KanbanView from './kanban-view/KanbanView'
import Panel from './panel/Panel'

const Tasks: NextPage = () => {
  return (
    <main className={styles.container}>
      <Heading text="Tasks" />
      <Panel />
      <KanbanView />
    </main>
  )
}

export default Tasks
