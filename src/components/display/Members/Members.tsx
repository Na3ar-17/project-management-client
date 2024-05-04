'use client'
import { NextPage } from 'next'
import DataTable from './Table/DataTable'
import { columns } from './Table/Columns/Columns'
import Heading from '@/components/ui/heading/Heading'
import { useGetAllMembers } from '@/api/hooks/members/useGetAllMembers'
import styles from './Members.module.scss'
interface IProps {
  projectId: string
}

const Members: NextPage<IProps> = ({ projectId }) => {
  const { isFetching, isSuccess, membersData } = useGetAllMembers(projectId)
  if (!isSuccess || !membersData) {
    // TODO handle error
    return <div> Error</div>
  }
  return (
    <div>
      <Heading text="Members" />
      <div className="pt-6">
        {membersData.length <= 1 ? (
          <div className={styles['no-members']}>asd</div>
        ) : (
          <DataTable data={membersData} columns={columns} />
        )}
      </div>
    </div>
  )
}

export default Members
