import { NextPage } from 'next'
import styles from './Comments.module.scss'
import { ScrollArea } from '../../shadcn/ui/scroll-area'
import { commentsData } from '@/data/tasks.data'
import AvatarComponent from '../../avatar/AvatarComponent'
import { ChatField } from '../../fields/chat-field/ChatField'
import { SendHorizontal } from 'lucide-react'

interface IProps {}

const Comments: NextPage<IProps> = ({}) => {
  return (
    <div className={styles.container}>
      <ScrollArea className="h-[110px] w-full">
        <div className={styles.content}>
          <div className={styles.comment}>
            <AvatarComponent avatarStyles="w-fit" size={22} />
            <p className={styles.text}>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className={styles.comment}>
            <AvatarComponent avatarStyles="w-fit" size={22} />
            <p className={styles.text}>Hello Proquill</p>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

export default Comments
