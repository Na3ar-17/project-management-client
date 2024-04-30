import Dashboard from '@/components/display/Dashboard/Dashboard'
import { NextPage } from 'next'

interface IProps {
  params: {
    slug: string
    id: string
  }
}

const page: NextPage<IProps> = ({ params }) => {
  return (
    <main>
      <Dashboard params={params} />
    </main>
  )
}

export default page
