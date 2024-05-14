import { authKeys } from '@/api/keys/auth.keys'
import { authService } from '@/api/services/auth.service'
import { useDashboard } from '@/hooks/useDashboard'
import { TypeAuthFormLogin } from '@/types/authForm.type'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useLogin = () => {
  const { push } = useRouter()
  const { DASHBOARD_PAGES } = useDashboard()
  const { mutate: loginMutation } = useMutation({
    mutationKey: [authKeys.AUTH],
    mutationFn: (dto: TypeAuthFormLogin) => authService.login(dto),
    onSuccess: () => {
      push(DASHBOARD_PAGES.SETTINGS)
      toast.success('Successfully login')
    },
  })

  return { loginMutation }
}
