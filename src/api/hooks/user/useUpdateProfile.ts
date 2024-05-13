import { userKeys } from '@/api/keys/user.keys'
import { userService } from '@/api/services/user.service'
import { TypeUpdateProfile } from '@/types/user.type'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const useUpdateProfile = () => {
  const queryClient = useQueryClient()
  const { mutate: updateProfileMutation } = useMutation({
    mutationKey: [userKeys.USER + 'update_profile'],
    mutationFn: (dto: TypeUpdateProfile) => userService.update(dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] })
      toast.success('Successfully updated profile')
    },
  })

  return { updateProfileMutation }
}
