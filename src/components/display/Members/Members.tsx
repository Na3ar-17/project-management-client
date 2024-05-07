'use client'
import { NextPage } from 'next'
import Heading from '@/components/ui/heading/Heading'
import { useGetAllMembers } from '@/api/hooks/members/useGetAllMembers'
import styles from './Members.module.scss'
import AddMemberForm from './AddMemberForm/AddMemberForm'
import { useMemo } from 'react'
import { useProjectOwner } from '@/api/hooks/project/useProjectOwner'
interface IProps {
  projectId: string
}

const Members: NextPage<IProps> = ({ projectId }) => {
  const { isFetching, isSuccess, membersData } = useGetAllMembers(projectId)
  const { isOwner } = useProjectOwner({ projectId })

  if (!isSuccess || !membersData) {
    // TODO handle error
    return <div> Error</div>
  }

  return (
    <div>
      <Heading text="Members" />
      <div className="pt-6">
        {membersData.length <= 0 ? (
          <div className={styles['no-members']}>
            <p className="text-lg"> There are no members in this project</p>
            <AddMemberForm projectId={projectId} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default Members
