import { NextPage } from 'next'
import { Avatar, AvatarImage } from '@/components/ui/shadcn/ui/avatar'

export interface IUserAvatarProps {
  imgLink?: string
  size?: number
}

const AvatarComponent: NextPage<IUserAvatarProps> = ({
  imgLink = 'https://github.com/shadcn.png',
  size = 40,
}) => {
  return (
    <Avatar>
      <AvatarImage
        style={{ width: `${size}px`, height: `${size}px` }}
        src={imgLink}
        alt="avatar"
      />
    </Avatar>
  )
}

export default AvatarComponent
