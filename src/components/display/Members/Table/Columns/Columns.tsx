'use client'

import CheckBox from '@/components/ui/check-boxes/check-box-standart/CheckBox'
import styles from './Columns.module.scss'
import {
  EnumUserRole,
  EnumUserStatus,
  IMembers,
  userRoleText,
  userStatusText,
} from '@/types/members.type'
import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/shadcn/ui/button'
import { ArrowDownUp } from 'lucide-react'
import { userRoleFormat, userStatusFormat } from '../../utils'

import DropdownMenuComponent from '@/components/ui/dropdown-menu-component/DropdownMenuComponent'
export const columns: ColumnDef<IMembers>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <CheckBox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <CheckBox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'fullName',
    header: () => <p className={styles.header}>Full Name</p>,
    cell: ({ row }) => {
      return <p className={styles['row-text']}>{row.getValue('fullName')}</p>
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <p className={styles.header}>Email</p>
          <ArrowDownUp className="ml-2 size-4 text-text2" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className={`${styles['row-text']} ${`lowercase`}`}>
        {row.getValue('email')}
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: () => <p className={styles.header}>Status</p>,
    cell: ({ row }) => {
      const status: EnumUserStatus = row.getValue('status')
      const convertedFromEnum = userStatusFormat(userStatusText[status])
      return <p className={styles['row-text']}>{convertedFromEnum}</p>
    },
  },
  {
    accessorKey: 'role',
    header: () => <p className={styles.header}>Role</p>,
    cell: ({ row }) => {
      const role: EnumUserRole = row.getValue('role')
      const convertedFromEnum = userRoleFormat(userRoleText[role])
      return <p className={styles['row-text']}>{convertedFromEnum}</p>
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: () => {
      return <DropdownMenuComponent />
    },
  },
]
