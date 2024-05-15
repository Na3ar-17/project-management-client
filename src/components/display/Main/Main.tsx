import { NextPage } from 'next'
import styles from './Main.module.scss'
import EmptyMessage from '@/components/ui/empty-message/EmptyMessage'

const Main: NextPage = () => {
  return (
    <main className={styles.container}>
      <EmptyMessage title="Coming Soon" subTitle="" titleStyles="text-4xl" />
    </main>
  )
}

export default Main
