import { NextPage } from 'next'
import styles from './FullUserAvatar.module.scss'
import AvatarComponent from '../AvatarComponent'
import cn from 'clsx'
import { IUser } from '@/types/user.type'

interface IProps {
  className?: string
  data: IUser
  avatarSize?: number
}

const FullUserAvatar: NextPage<IProps> = ({
  className,
  data,
  avatarSize = 28,
}) => {
  const { email, fullName, imgLink } = data
  return (
    <div className={cn(styles.container, className)}>
      <AvatarComponent
        fullName={fullName}
        imgLink={imgLink}
        size={avatarSize}
        avatarStyles="w-fit"
      />
      <div className={styles.info}>
        <p className={styles.fullname}>{fullName}</p>
        <p className={styles.email}>{email}</p>
      </div>
    </div>
  )
}

export default FullUserAvatar
