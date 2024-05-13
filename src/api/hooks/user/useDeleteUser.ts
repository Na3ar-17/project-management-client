import { userKeys } from '@/api/keys/user.keys'
import { removeFromStorage } from '@/api/services/auth-toke.service'
import { userService } from '@/api/services/user.service'
import { DASHBOARD_PAGES } from '@/config/pages-url-config'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export const useDeleteUser = () => {
  const { replace } = useRouter()
  const { mutate: deleteUserMutation } = useMutation({
    mutationKey: [userKeys.DELETE],
    mutationFn: () => userService.delete(),
    onSuccess: () => {
      replace(DASHBOARD_PAGES.AUTH)
      removeFromStorage()
    },
  })
  return { deleteUserMutation }
}
