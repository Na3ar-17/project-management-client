import { NextPage } from 'next'
import styles from './Tasks.module.scss'
import Heading from '@/components/ui/heading/Heading'
import KanbanView from './kanban-view/KanbanView'
import Panel from './panel/Panel'
export interface IProps {
  projectId: string
}

const Tasks: NextPage<IProps> = ({ projectId }) => {
  return (
    <main className={styles.container}>
      <Heading text="Tasks" />
      <Panel projectId={projectId} />
      <KanbanView projectId={projectId} />
    </main>
  )
}

export default Tasks
