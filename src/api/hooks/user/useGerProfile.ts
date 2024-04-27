import { userKeys } from '@/api/keys/user.keys'
import { userService } from '@/api/services/user.service'
import { useQuery } from '@tanstack/react-query'

export const useGerProfile = () => {
  const { data, isSuccess, isFetching } = useQuery({
    queryKey: [userKeys.USER],
    queryFn: () => userService.getProfile(),
  })

  return { data, isSuccess, isFetching }
}
