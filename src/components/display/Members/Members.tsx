import { NextPage } from 'next'
import DataTable from './Table/DataTable'
import { membersData } from '@/data/members.data'
import { columns } from './Table/Columns/Columns'
import Heading from '@/components/ui/heading/Heading'

const Members: NextPage = () => {
  return (
    <div>
      <Heading text="Members" />
      <div className="pt-6">
        <DataTable data={membersData} columns={columns} />
      </div>
    </div>
  )
}

export default Members
