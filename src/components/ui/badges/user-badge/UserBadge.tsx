import { NextPage } from 'next'
import AvatarComponent from '../../avatar/AvatarComponent'
import styles from './UserBadge.module.scss'
import cn from 'clsx'
interface IProps {
  fullName: string
  imgLink: string
  clasName?: string
}

const UserBadge: NextPage<IProps> = ({ fullName, imgLink, clasName }) => {
  return (
    <div className={cn(styles.container, clasName)}>
      <AvatarComponent imgLink={imgLink} avatarStyles="w-fit" size={20} />
      <p className={styles.fullName}>{fullName}</p>
    </div>
  )
}

export default UserBadge
