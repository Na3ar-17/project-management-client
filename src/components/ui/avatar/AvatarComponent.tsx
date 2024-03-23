import { NextPage } from 'next'
import { Avatar, AvatarImage } from '@/components/ui/shadcn/ui/avatar'

interface IProps {
  imgLink?: string
  size?: number
}

const AvatarComponent: NextPage<IProps> = ({
  imgLink = 'https://github.com/shadcn.png',
  size,
}) => {
  return (
    <Avatar>
      <AvatarImage src={imgLink} alt="avatar" />
    </Avatar>
  )
}

export default AvatarComponent
