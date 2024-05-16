import { authKeys } from '@/api/keys/auth.keys'
import { authService } from '@/api/services/auth.service'
import { useDashboard } from '@/hooks/useDashboard'
import { TypeAuthFormRegister } from '@/types/authForm.type'
import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useRegister = () => {
  const t = useTranslations('toast.auth')

  const { push } = useRouter()
  const { DASHBOARD_PAGES } = useDashboard()
  const { mutate: registerMutation } = useMutation({
    mutationKey: [authKeys.AUTH],
    mutationFn: (dto: TypeAuthFormRegister) => authService.register(dto),
    onSuccess: () => {
      push(DASHBOARD_PAGES.SETTINGS)
      toast.success(t('register'))
    },
  })

  return { registerMutation }
}
