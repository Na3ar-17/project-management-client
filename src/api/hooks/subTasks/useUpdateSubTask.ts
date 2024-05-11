import { subTasksKeys } from '@/api/keys/subTasks.keys'
import { tasksKeys } from '@/api/keys/tasks.keys'
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
      queryClient.invalidateQueries({
        queryKey: [subTasksKeys.GET_ALL],
      })
      // queryClient.invalidateQueries({
      //   queryKey: [tasksKeys.GET_ALL],
      // })
      toast.success('Successfully updated')
    },
  })

  return { updateSubTakMutation }
}
