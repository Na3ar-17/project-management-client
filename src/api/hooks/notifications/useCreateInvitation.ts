import { notificationsKeys } from '@/api/keys/notifications.keys'
import { notificationsService } from '@/api/services/notifications.service'
import { TypeCreateNotificationDto } from '@/types/notifications.types'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const useCreateInvitation = () => {
  const { mutate: createInvitationMutation } = useMutation({
    mutationKey: [notificationsKeys.CREATE_INVITE],
    mutationFn: (dto: TypeCreateNotificationDto) =>
      notificationsService.createInvitation(dto),
    onSuccess: () => {
      toast.success('Successfully sent invite')
    },
  })
  return { createInvitationMutation }
}
