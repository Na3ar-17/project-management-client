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
      toast.success('Successfully updated profile')
      queryClient.invalidateQueries()
    },
  })

  return { updateProfileMutation }
}
