import Reset from '@/components/display/RecoverPassword/Reset/Reset'
import { NextPage } from 'next'

interface IProps {
  params: {
    token: string
  }
}

const page: NextPage<IProps> = ({ params: { token } }) => {
  return <Reset token={token} />
}

export default page
