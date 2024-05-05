import { membersKeys } from '@/api/keys/members.keys'
import { membersService } from '@/api/services/members.service'
import { DASHBOARD_PAGES } from '@/config/pages-url-config'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export const useAddNewMember = () => {
  const { push } = useRouter()
  const { mutate: addNewMemberMutation, data } = useMutation({
    mutationKey: [membersKeys.ADD_NEW],
    mutationFn: (projectId: string) => membersService.addNewMember(projectId),
    onSuccess: ({ project: { id, slug } }) => {
      push(`${DASHBOARD_PAGES.PROJECTS}/${slug}/${id}/members`)
    },
  })
  return { addNewMemberMutation }
}
