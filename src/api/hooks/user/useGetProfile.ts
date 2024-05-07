import { userKeys } from '@/api/keys/user.keys'
import { userService } from '@/api/services/user.service'
import { IMAGE_URL } from '@/constants/url.constants'
import { useQuery } from '@tanstack/react-query'

export const useGetProfile = () => {
  const { data, isSuccess, isFetching } = useQuery({
    queryKey: [userKeys.USER],
    queryFn: () => userService.getProfile(),
    retry: 3,
  })

  return { data, isSuccess, isFetching }
}
