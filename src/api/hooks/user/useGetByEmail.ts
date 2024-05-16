import { userKeys } from '@/api/keys/user.keys'
import { userService } from '@/api/services/user.service'
import { useMutation } from '@tanstack/react-query'

export const useGetByEmail = () => {
  const { mutate: getByEmailMutation } = useMutation({
    mutationKey: [userKeys.GET_BY_EMAIL],
    mutationFn: ({ data }: { data: { email: string } }) =>
      userService.getByEmail(data),
  })
  return { getByEmailMutation }
}
