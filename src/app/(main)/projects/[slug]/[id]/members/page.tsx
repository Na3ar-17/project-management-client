import Members from '@/components/display/Members/Members'
import { NextPage } from 'next'

export interface IProps {
  params: {
    id: string
  }
}

const page: NextPage<IProps> = ({ params: { id } }) => {
  return <Members projectId={id} />
}

export default page
