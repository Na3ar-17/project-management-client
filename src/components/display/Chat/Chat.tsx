import { NextPage } from 'next'
import styles from './Chat.module.scss'
import { Boxes } from 'lucide-react'

const Chat: NextPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.chat}>
        <nav className={styles.header}>
          <Boxes />
          <p className={styles['chat-name']}>Socila Media Chat</p>
        </nav>
        <div className={styles.body}>Body</div>
        <div className={styles.footer}>Footer</div>
      </div>
      <div className={styles['chat-info']}>Chat info</div>
    </main>
  )
}

export default Chat
