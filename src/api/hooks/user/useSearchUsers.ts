import { userKeys } from '@/api/keys/user.keys'
import { userService } from '@/api/services/user.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useSearchUsers = () => {
  const queryClient = useQueryClient()
  const {
    mutate: searchUsersMutation,
    data,
    isPending,
  } = useMutation({
    mutationKey: [userKeys.SEARCH],
    mutationFn: (dto: { email: string }) => userService.searchByEmail(dto),
    onSuccess: () => {
      queryClient.invalidateQueries()
    },
  })
  return { searchUsersMutation, data, isPending }
}
