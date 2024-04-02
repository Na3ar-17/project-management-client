import { NextPage } from 'next'
import styles from './Members.module.scss'
import CheckBox from '@/components/ui/check-boxes/check-box-standart/CheckBox'
import DataTable from './Table/DataTable'
import { membersData } from '@/data/members.data'
import { columns } from './Table/Columns/Columns'
import Heading from '@/components/ui/heading/Heading'
import { Button } from '@/components/ui/shadcn/ui/button'

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
