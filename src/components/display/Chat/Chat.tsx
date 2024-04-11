import { NextPage } from 'next'
import styles from './Chat.module.scss'
import { Boxes } from 'lucide-react'
import { ChatField } from '@/components/ui/fields/chat-field/ChatField'
import AvatarComponent from '@/components/ui/avatar/AvatarComponent'

const Chat: NextPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.chat}>
        <nav className={styles.header}>
          <Boxes className={styles['chat-icon']} />
          <p className={styles['chat-name']}>Socila Media Chat</p>
        </nav>
        <div className={styles.body}>
          <div className={styles['message']}>
            <AvatarComponent size={35} />
            <span className={styles.content}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium aut excepturi vel labore iure sint suscipit nostrum
              voluptatum laborum nesciunt, ea maxime officiis magni qui. Saepe
              perferendis iste nemo ut id autem voluptate accusamus qui
              explicabo, atque unde quam inventore quia animi consequatur. Sed
              <p className={styles['created-at']}>20:10</p>
            </span>
          </div>
          <div className={styles['my-message']}>
            <span className={styles.content}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              dolor nam ut, quam omnis quae reiciendis eos ipsum veniam
              <p className={styles['created-at']}>20:10</p>
            </span>
          </div>
          <div className={styles['my-message']}>
            <span className={styles.content}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              dolor nam ut, quam omnis quae reiciendis eos ipsum veniam
              <p className={styles['created-at']}>20:10</p>
            </span>
          </div>
          <div className={styles['my-message']}>
            <span className={styles.content}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              dolor nam ut, quam omnis quae reiciendis eos ipsum veniam
              <p className={styles['created-at']}>20:10</p>
            </span>
          </div>
        </div>
        <div className={styles.footer}>
          <ChatField placeholder="Your Message" userAvatar={{ size: 30 }} />
        </div>
      </div>
      <div className={styles['chat-info']}>Chat info</div>
    </main>
  )
}

export default Chat
