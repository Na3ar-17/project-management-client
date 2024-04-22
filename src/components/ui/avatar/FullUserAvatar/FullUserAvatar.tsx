import { NextPage } from 'next'
import styles from './FullUserAvatar.module.scss'
import AvatarComponent from '../AvatarComponent'
import cn from 'clsx'
interface IProps {
  className?: string
}

const FullUserAvatar: NextPage<IProps> = ({ className }) => {
  return (
    <div className={cn(styles.container, className)}>
      <AvatarComponent size={28} avatarStyles="w-fit" />
      <div className={styles.info}>
        <p className={styles.fullname}>Gavrylyk Nazar</p>
        <p className={styles.email}>gavruluknazar0210@gmail.com</p>
      </div>
    </div>
  )
}

export default FullUserAvatar
