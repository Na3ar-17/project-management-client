import { NextPage } from 'next'
import AvatarComponent from '../../avatar/AvatarComponent'
import styles from './UserBadge.module.scss'
interface IProps {
  fullName: string
  imgLink: string
}

const UserBadge: NextPage<IProps> = ({ fullName, imgLink }) => {
  return (
    <div className={styles.container}>
      <AvatarComponent imgLink={imgLink} avatarStyles="w-fit" size={20} />
      <p className={styles.fullName}>{fullName}</p>
    </div>
  )
}

export default UserBadge
