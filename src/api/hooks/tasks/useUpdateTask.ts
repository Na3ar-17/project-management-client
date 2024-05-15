import { statisticsKeys } from '@/api/keys/statistics.keys'
import { tasksKeys } from '@/api/keys/tasks.keys'
import { tasksService } from '@/api/services/tasks.service'
import { TypeUpdateTaskCard } from '@/types/tasks.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const useUpdateTask = () => {
  const queryClient = useQueryClient()

  const { mutate: updateTaskMutation } = useMutation({
    mutationKey: [tasksKeys.UPDATE],
    mutationFn: (dto: TypeUpdateTaskCard) => tasksService.update(dto),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [tasksKeys.GET_ALL],
      })
      queryClient.invalidateQueries({
        queryKey: [statisticsKeys.GET_ONE],
      })
      toast.success('Successfully updated task')
    },
  })

  return { updateTaskMutation }
}
