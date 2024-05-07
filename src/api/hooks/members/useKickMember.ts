import { membersKeys } from '@/api/keys/members.keys'
import { membersService } from '@/api/services/members.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const useKickMember = () => {
  const queryClient = useQueryClient()
  const { mutate: kickMemberMutation } = useMutation({
    mutationKey: [membersKeys.KICK],
    mutationFn: ({ projectId, id }: { projectId: string; id: string }) =>
      membersService.kick({ projectId, id }),
    onSuccess: () => {
      queryClient.invalidateQueries()
      toast.success('Seccessfully kicked member')
    },
  })
  return { kickMemberMutation }
}
