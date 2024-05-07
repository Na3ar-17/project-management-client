import { membersKeys } from '@/api/keys/members.keys'
import { membersService } from '@/api/services/members.service'
import { DASHBOARD_PAGES } from '@/config/pages-url-config'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useRouter as nr } from 'next/router'
import { useDeleteNotification } from '../notifications/useDeleteNotification'

export const useAddNewMember = (notificationId: string) => {
  const { push } = useRouter()
  const { deleteNotificationMutation } = useDeleteNotification()
  const { mutate: addNewMemberMutation } = useMutation({
    mutationKey: [membersKeys.ADD_NEW],
    mutationFn: ({
      ownerId,
      projectId,
    }: {
      projectId: string
      ownerId: string
    }) => membersService.addNewMember(projectId, ownerId),
    onSuccess: ({ project: { id, slug } }) => {
      deleteNotificationMutation(notificationId)
      push(DASHBOARD_PAGES.PROJECTS)
      nr().reload()
    },
  })
  return { addNewMemberMutation }
}
