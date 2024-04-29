import { NextPage } from 'next'

interface IProps {
  params: {
    slug: string
    id: string
  }
}

const page: NextPage<IProps> = ({ params }) => {
  return (
    <div>
      {params.slug} {params.id}
    </div>
  )
}

export default page
