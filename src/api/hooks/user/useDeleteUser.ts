import { userKeys } from '@/api/keys/user.keys'
import { removeFromStorage } from '@/api/services/auth-toke.service'
import { userService } from '@/api/services/user.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const useDeleteUser = () => {
  const queryClient = useQueryClient()
  const { mutate: deleteUserMutation } = useMutation({
    mutationKey: [userKeys.DELETE],
    mutationFn: () => userService.delete(),
    onSuccess: () => {
      removeFromStorage()
      queryClient.invalidateQueries()
      toast.success('Account deleted successfully')
    },
  })
  return { deleteUserMutation }
}
