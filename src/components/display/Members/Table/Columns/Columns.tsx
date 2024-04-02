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
          <ArrowDownUp className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue('email')}</div>,
  },
  {
    accessorKey: 'status',
    header: () => <p className={styles.header}>Status</p>,
    cell: ({ row }) => {
      const status: EnumUserStatus = row.getValue('status')
      const convertedFromEnum = userStatusFormat(userStatusText[status])
      return convertedFromEnum
    },
  },
  {
    accessorKey: 'role',
    header: () => <p className={styles.header}>Role</p>,
    cell: ({ row }) => {
      const role: EnumUserRole = row.getValue('role')
      const convertedFromEnum = userRoleFormat(userRoleText[role])
      return convertedFromEnum
    },
  },
]
