import { userKeys } from '@/api/keys/user.keys'
import { userService } from '@/api/services/user.service'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const useDeleteUser = () => {
  const { mutate: deleteUserMutation } = useMutation({
    mutationKey: [userKeys.DELETE],
    mutationFn: () => userService.delete(),
    onSuccess: () => {
      toast.success('Account deleted successfully', {
        className: 'bg-red',
      })
    },
  })
  return {}
}
