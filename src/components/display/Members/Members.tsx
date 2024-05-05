'use client'
import { NextPage } from 'next'
import DataTable from './Table/DataTable'
import { columns } from './Table/Columns/Columns'
import Heading from '@/components/ui/heading/Heading'
import { useGetAllMembers } from '@/api/hooks/members/useGetAllMembers'
import styles from './Members.module.scss'
import AddMemberForm from './AddMemberForm/AddMemberForm'
interface IProps {
  projectId: string
}

const Members: NextPage<IProps> = ({ projectId }) => {
  const { isFetching, isSuccess, membersData } = useGetAllMembers(projectId)
  if (!isSuccess || !membersData) {
    // TODO handle error
    return <div> Error</div>
  }

  console.log(membersData)

  return (
    <div>
      <Heading text="Members" />
      <div className="pt-6">
        {membersData.length <= 0 ? (
          <div className={styles['no-members']}>
            <p className="text-lg"> There are no members in this project</p>
            <AddMemberForm />
          </div>
        ) : (
          <DataTable data={membersData} columns={columns} />
        )}
      </div>
    </div>
  )
}

export default Members
