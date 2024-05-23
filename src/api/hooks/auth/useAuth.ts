import { authKeys } from '@/api/keys/auth.keys'
import { authService } from '@/api/services/auth.service'
import { useDashboard } from '@/hooks/useDashboard'
import { TypeAuthFormLogin, TypeAuthFormRegister } from '@/types/authForm.type'
import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useAuth = () => {
  const t = useTranslations('toast.auth')
  const { push } = useRouter()
  const { DASHBOARD_PAGES } = useDashboard()

  const useLogin = () => {
    const { mutate: loginMutation, isPending } = useMutation({
      mutationKey: [authKeys.AUTH],
      mutationFn: (dto: TypeAuthFormLogin) => authService.login(dto),
      onSuccess: () => {
        push(DASHBOARD_PAGES.SETTINGS)
        toast.success(t('login'))
      },
    })

    return { loginMutation, isPending }
  }
  const useLogout = () => {
    const { mutate: logoutMutation, isPending } = useMutation({
      mutationKey: [authKeys.AUTH],
      mutationFn: () => authService.logout(),
      onSuccess: () => {
        push(DASHBOARD_PAGES.AUTH)
        toast.success(t('log-out'))
      },
    })

    return { logoutMutation, isPending }
  }

  const useRegister = () => {
    const { mutate: registerMutation, isPending } = useMutation({
      mutationKey: [authKeys.AUTH],
      mutationFn: (dto: TypeAuthFormRegister) => authService.register(dto),
      onSuccess: () => {
        push(DASHBOARD_PAGES.SETTINGS)
        toast.success(t('register'))
      },
    })

    return { registerMutation, isPending }
  }

  return { useRegister, useLogin, useLogout }
}
