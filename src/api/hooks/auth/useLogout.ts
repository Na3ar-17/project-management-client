import { authKeys } from '@/api/keys/auth.keys'
import { authService } from '@/api/services/auth.service'

import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useDashboard } from '@/hooks/useDashboard'

export const useLogout = () => {
  const { push } = useRouter()
  const { DASHBOARD_PAGES } = useDashboard()
  const { mutate: logoutMutation, isPending } = useMutation({
    mutationKey: [authKeys.AUTH],
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      push(DASHBOARD_PAGES.AUTH)
      toast.success('Successfully logout')
    },
  })

  return { logoutMutation, isPending }
}
