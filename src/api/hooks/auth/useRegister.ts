import { userKeys } from '@/api/keys/user.keys'
import { authService } from '@/api/services/auth.service'
import { DASHBOARD_PAGES } from '@/config/pages-url-config'
import { TypeAuthFormRegister } from '@/types/authForm.type'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export const useRegister = () => {
  const { push } = useRouter()

  const { mutate: registerMutation } = useMutation({
    mutationKey: [userKeys.AUTH],
    mutationFn: (dto: TypeAuthFormRegister) => authService.register(dto),
    onSuccess: () => {
      push(DASHBOARD_PAGES.SETTINGS)
    },
  })

  return { registerMutation }
}
