import { EnumUserRole, EnumUserStatus, IMembers } from '@/types/members.type'

export const membersData: IMembers[] = [
  {
    id: 'фівфів',
    fullName: 'Bob Smith',
    role: EnumUserRole.USER,
    status: EnumUserStatus.INACTIVE,
    email: 'bob.smith@example.com',
  },
  {
    id: 'asda',
    fullName: 'Alice Johnson',
    role: EnumUserRole.CREATOR,
    status: EnumUserStatus.ACTIVE,
    email: 'alice.johnson@example.com',
  },
  {
    id: 'dscxc',
    fullName: 'David Williams',
    role: EnumUserRole.USER,
    status: EnumUserStatus.ACTIVE,
    email: 'david.williams@example.com',
  },
  {
    id: 'kdgkdfgdfkg',
    fullName: 'Charlie Brown',
    role: EnumUserRole.MODERATOR,
    status: EnumUserStatus.ACTIVE,
    email: 'charlie.brown@example.com',
  },
]
