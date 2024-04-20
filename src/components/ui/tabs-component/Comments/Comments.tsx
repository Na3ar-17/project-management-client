import { NextPage } from 'next'
import styles from './Comments.module.scss'
import { ScrollArea } from '../../shadcn/ui/scroll-area'
import { commentsData } from '@/data/tasks.data'
import AvatarComponent from '../../avatar/AvatarComponent'

interface IProps {}

const Comments: NextPage<IProps> = ({}) => {
  return (
    <div className={styles.container}>
      <ScrollArea className="h-[110px] w-full">
        <div className={styles.content}>
          <div className={styles.comment}>
            <AvatarComponent avatarStyles="w-fit" size={22} />
            <p className={styles.text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
              nobis obcaecati a, delectus veritatis praesentium tempore aperiam
              nam quidem? Iure, amet qui? Doloribus perferendis temporibus
              incidunt pariatur vero eligendi error vel accusamus illum
              repudiandae quia, consequatur quam, corrupti omnis suscipit nisi
              dolore rerum minus! Atque cumque explicabo ipsum nesciunt, at
              earum a non error blanditiis voluptatem hic iusto maiores
              molestias vitae assumenda similique eaque autem quasi adipisci
              quo. Atque soluta reprehenderit aperiam accusamus voluptatem
              architecto, excepturi optio aut quas eius, dolor assumenda, ut
              sint iusto alias cumque ullam nihil nobis maxime sunt nemo? Ea
              quaerat iusto nam doloremque nulla alias.
            </p>
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
