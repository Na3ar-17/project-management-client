import { NextPage } from 'next'
import styles from './AddCard.module.scss'
import { Plus } from 'lucide-react'
export interface IProps {
  onClick: () => void
}

const AddCard: NextPage<IProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={styles.card}>
      <div className={styles.content}>
        <p>Create new Project</p>
        <Plus strokeWidth={1.25} className={styles.icon} />
      </div>
    </div>
  )
}

export default AddCard
