import { notificationsKeys } from '@/api/keys/notifications.keys'
import { notificationsService } from '@/api/services/notifications.service'
import { TypeRejectInvitation } from '@/types/notifications.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const useRejectInvitation = () => {
  const queryClient = useQueryClient()
  const { mutate: rejectInvitationMutation } = useMutation({
    mutationKey: [notificationsKeys.REJECT_INVITE],
    mutationFn: (dto: TypeRejectInvitation) =>
      notificationsService.rejectInvitation(dto),
    onSuccess: () => {
      queryClient.invalidateQueries()
      toast.success('Invitation rejected')
    },
  })
  return { rejectInvitationMutation }
}
