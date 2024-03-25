import { NextPage } from 'next'
import styles from './AddCard.module.scss'
import { Plus } from 'lucide-react'

const AddCard: NextPage = () => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <Plus strokeWidth={1.25} className={styles.icon} />
      </div>
    </div>
  )
}

export default AddCard
