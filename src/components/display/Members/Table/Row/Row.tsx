import { IMembers } from '@/types/members.type'
import { NextPage } from 'next'
import styles from '../Table.module.scss'
import DropdownMenuComponent from '@/components/ui/dropdown-menu-component/DropdownMenuComponent'
import { cn } from '@/lib/utils'
import { userRoleFormat } from '../../utils'
import { useKickMember } from '@/api/hooks/members/useKickMember'
interface IProps {
  data: IMembers
  isOwner: boolean
  currentUserId: string
  projectId: string
}

const Row: NextPage<IProps> = ({ isOwner, data, currentUserId, projectId }) => {
  const {
    user: { email, fullName, id: userId },
    role,
    id,
  } = data

  const { kickMemberMutation } = useKickMember()
  return (
    <div
      className={cn(styles.row, currentUserId === id && 'bg-accent-gray2/50')}
    >
      <p className={styles.fullname}>{fullName}</p>
      <p className={styles.email}>{email}</p>
      {userRoleFormat(role || '')}
      {isOwner && currentUserId !== userId && (
        <DropdownMenuComponent
          onKick={() => kickMemberMutation({ id, projectId })}
        />
      )}
    </div>
  )
}

export default Row
