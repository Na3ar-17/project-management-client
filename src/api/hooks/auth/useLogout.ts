import { authKeys } from '@/api/keys/auth.keys'
import { authService } from '@/api/services/auth.service'
import { DASHBOARD_PAGES } from '@/config/pages-url-config'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export const useLogout = () => {
  const { push } = useRouter()

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
