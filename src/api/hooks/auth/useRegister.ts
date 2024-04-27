import { authKeys } from '@/api/keys/auth.keys'
import { authService } from '@/api/services/auth.service'
import { DASHBOARD_PAGES } from '@/config/pages-url-config'
import { TypeAuthFormRegister } from '@/types/authForm.type'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useRegister = () => {
  const { push } = useRouter()

  const { mutate: registerMutation } = useMutation({
    mutationKey: [authKeys.AUTH],
    mutationFn: (dto: TypeAuthFormRegister) => authService.register(dto),
    onSuccess: () => {
      push(DASHBOARD_PAGES.SETTINGS)
      toast.success('Successfullyregister')
    },
  })

  return { registerMutation }
}
