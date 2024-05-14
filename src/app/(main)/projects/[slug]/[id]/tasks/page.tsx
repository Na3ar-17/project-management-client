import Tasks from '@/components/display/Tasks/Tasks'
import { NextPage } from 'next'

interface IProps {
  params: {
    id: string
  }
}

const page: NextPage<IProps> = ({ params }) => {
  return <Tasks projectId={params.id} />
}

export default page
