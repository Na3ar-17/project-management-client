import { NextPage } from 'next'

interface IProps {
  params: {
    slug: string
  }
}

const page: NextPage<IProps> = ({ params }) => {
  return <div>{params.slug}</div>
}

export default page
