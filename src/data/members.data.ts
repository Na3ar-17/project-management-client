import {
  EnumMemberRole,
  EnumMemberStatus,
  IMembers,
} from '@/types/members.type'

export const membersData: IMembers[] = [
  {
    id: 'фівфів',
    fullName: 'Bob Smith',
    role: EnumMemberRole.Member,
    status: EnumMemberStatus.Active,
    email: 'bob.smith@example.com',
    imgLink: '',
    // 'https://i.pinimg.com/736x/6e/96/07/6e9607f3f07ebe87550c36115e3e7abe.jpg',
  },
  {
    id: 'фівфів',
    fullName: 'Nazar Gavrylyk',
    role: EnumMemberRole.Creator,
    status: EnumMemberStatus.Inactive,
    email: 'test@gmail.com',
    imgLink:
      'https://i.pinimg.com/736x/04/b6/28/04b628819a7d914f056a810e007678e8.jpg',
  },
  {
    id: 'asda',
    fullName: 'Alice Johnson',
    role: EnumMemberRole.Admin,
    status: EnumMemberStatus.Active,
    email: 'test4@gmail.com',
    imgLink:
      'https://i.pinimg.com/564x/19/c8/c7/19c8c789aec27508fee721babf82597e.jpg',
  },
  {
    id: 'dscxc',
    fullName: 'David Williams',
    role: EnumMemberRole.Member,
    status: EnumMemberStatus.Inactive,
    email: 'test3@gmail.com',
    imgLink:
      'https://i.pinimg.com/564x/ca/11/22/ca1122888d2c4c098356c27f91e923ed.jpg',
  },
  {
    id: 'kdgkdfgdfkg',
    fullName: 'Charlie Brown',
    role: EnumMemberRole.Admin,
    status: EnumMemberStatus.Inactive,
    email: 'test2@gmail.com',
    imgLink:
      'https://i.pinimg.com/564x/40/82/a8/4082a8c61a8e8456c1e5d99aa149e77c.jpg',
  },
]
