import { membersKeys } from '@/api/keys/members.keys'
import { membersService } from '@/api/services/members.service'
import { useQuery } from '@tanstack/react-query'

export const useGetAllMembers = (projectId: string) => {
  const {
    data: membersData,
    isSuccess,
    isFetching,
  } = useQuery({
    queryKey: [membersKeys.GET_ALL],
    queryFn: () => membersService.getAll(projectId),
  })
  return { membersData, isSuccess, isFetching }
}
