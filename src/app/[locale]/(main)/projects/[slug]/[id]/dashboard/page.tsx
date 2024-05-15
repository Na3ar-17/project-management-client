import Dashboard from '@/components/display/Dashboard/Dashboard'
import { NextPage } from 'next'

interface IProps {
  params: {
    slug: string
    id: string
  }
}

const page: NextPage<IProps> = ({ params }) => {
  console.log(1)

  return <Dashboard params={params} />
}

export default page
