'use client'
import { NextPage } from 'next'
import Heading from '@/components/ui/heading/Heading'
import { useGetAllMembers } from '@/api/hooks/members/useGetAllMembers'
import styles from './Members.module.scss'
import AddMemberForm from './AddMemberForm/AddMemberForm'
import { useMemo } from 'react'
import { useProjectOwner } from '@/api/hooks/project/useProjectOwner'
import Table from './Table/Table'
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
        {/* <AddMemberForm projectId={projectId} /> */}
        <Table data={membersData} projectId={projectId} />
      </div>
    </div>
  )
}

export default Members
