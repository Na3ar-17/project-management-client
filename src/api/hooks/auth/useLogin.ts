import { authKeys } from '@/api/keys/auth.keys'
import { authService } from '@/api/services/auth.service'
import { useDashboard } from '@/hooks/useDashboard'
import { TypeAuthFormLogin } from '@/types/authForm.type'
import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useLogin = () => {
  const t = useTranslations('toast.auth')
  const { push } = useRouter()
  const { DASHBOARD_PAGES } = useDashboard()
  const { mutate: loginMutation } = useMutation({
    mutationKey: [authKeys.AUTH],
    mutationFn: (dto: TypeAuthFormLogin) => authService.login(dto),
    onSuccess: () => {
      push(DASHBOARD_PAGES.SETTINGS)
      toast.success(t('login'))
    },
  })

  return { loginMutation }
}
