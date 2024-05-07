import { NextPage } from 'next'
import styles from './Table.module.scss'
import { IMembers } from '@/types/members.type'
import { userRoleFormat } from '../utils'
import { DropdownMenu } from '@/components/ui/shadcn/ui/dropdown-menu'
import DropdownMenuComponent from '@/components/ui/dropdown-menu-component/DropdownMenuComponent'
import Columns from './Columns/Columns'
import { tableColumnsData } from '@/data/members.data'

interface IProps {
  data: IMembers[]
}

const Table: NextPage<IProps> = ({ data }) => {
  return (
    <main className={styles.table}>
      <Columns columnsData={tableColumnsData} />
      {data.map((el, index) => (
        <div key={index} className={styles.row}>
          <p className={styles.fullname}>{el.user.fullName}</p>
          <p className={styles.email}>{el.user.email}</p>
          {userRoleFormat(el.role || '')}
          <DropdownMenuComponent />
        </div>
      ))}
    </main>
  )
}

export default Table
