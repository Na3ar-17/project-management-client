import { userKeys } from '@/api/keys/user.keys'
import { removeFromStorage } from '@/api/services/auth-toke.service'
import { userService } from '@/api/services/user.service'
import { useDashboard } from '@/hooks/useDashboard'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export const useDeleteUser = () => {
  const { replace } = useRouter()
  const { DASHBOARD_PAGES } = useDashboard()
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
