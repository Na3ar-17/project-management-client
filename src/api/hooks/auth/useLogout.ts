import { authKeys } from '@/api/keys/auth.keys'
import { authService } from '@/api/services/auth.service'
import { DASHBOARD_PAGES } from '@/config/pages-url-config'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export const useLogout = () => {
  const { push } = useRouter()

  const { mutate: logoutMutation } = useMutation({
    mutationKey: [authKeys.AUTH],
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      push(DASHBOARD_PAGES.AUTH)
    },
  })

  return { logoutMutation }
}
