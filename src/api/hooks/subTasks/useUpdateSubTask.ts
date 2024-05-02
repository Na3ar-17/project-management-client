import { subTasksKeys } from '@/api/keys/subTasks.keys'
import { subTasksService } from '@/api/services/subTasks.service'
import { TypeUpdateSubTask } from '@/types/tasks.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const useUpdateSubTask = () => {
  const queryClient = useQueryClient()
  const { mutate: updateSubTakMutation } = useMutation({
    mutationKey: [subTasksKeys.UPDATE],
    mutationFn: (dto: TypeUpdateSubTask) => subTasksService.update(dto),
    onSuccess: () => {
      queryClient.invalidateQueries()
      toast.success('Successfully updated')
    },
  })

  return { updateSubTakMutation }
}
