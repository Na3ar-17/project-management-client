import { notificationsKeys } from '@/api/keys/notifications.keys'
import { notificationsService } from '@/api/services/notifications.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDeleteNotification = () => {
  const queryClient = useQueryClient()
  const { mutate: deleteNotificationMutation } = useMutation({
    mutationKey: [notificationsKeys.DELETE],
    mutationFn: (id: string) => notificationsService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries()
    },
  })
  return { deleteNotificationMutation }
}
