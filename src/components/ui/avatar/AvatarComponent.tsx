import { NextPage } from 'next'
import { Avatar, AvatarImage } from '@/components/ui/shadcn/ui/avatar'
import styles from './AvatarComponent.module.scss'
export interface IUserAvatarProps {
  imgLink?: string
  size?: number
  avatarStyles?: string
}

const AvatarComponent: NextPage<IUserAvatarProps> = ({
  imgLink = 'https://github.com/shadcn.png',
  size = 40,
  avatarStyles,
}) => {
  return (
    <Avatar className={avatarStyles}>
      <AvatarImage
        style={{ width: `${size}px`, height: `${size}px` }}
        src={imgLink}
        alt="avatar"
        className={styles.image}
      />
    </Avatar>
  )
}

export default AvatarComponent
