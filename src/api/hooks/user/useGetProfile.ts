import { userService } from '@/api/services/user.service'
import { useQuery } from '@tanstack/react-query'

export const useGetProfile = () => {
  const { data, isSuccess, isFetching } = useQuery({
    queryKey: ['profile'],
    queryFn: () => userService.getProfile(),
    retry: 3,
  })

  return { data, isSuccess, isFetching }
}
