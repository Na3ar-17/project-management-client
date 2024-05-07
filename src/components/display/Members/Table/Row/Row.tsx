import { IMembers } from '@/types/members.type'
import { NextPage } from 'next'
import styles from '../Table.module.scss'
import DropdownMenuComponent from '@/components/ui/dropdown-menu-component/DropdownMenuComponent'
import { cn } from '@/lib/utils'
import { userRoleFormat } from '../../utils'
interface IProps {
  data: IMembers
  isOwner: boolean
  currentUserId: string
}

const Row: NextPage<IProps> = ({ isOwner, data, currentUserId }) => {
  const {
    user: { email, fullName, id },
    role,
  } = data
  return (
    <div
      className={cn(styles.row, currentUserId === id && 'bg-accent-gray2/50')}
    >
      <p className={styles.fullname}>{fullName}</p>
      <p className={styles.email}>{email}</p>
      {userRoleFormat(role || '')}
      {isOwner && currentUserId !== id && <DropdownMenuComponent />}
    </div>
  )
}

export default Row
