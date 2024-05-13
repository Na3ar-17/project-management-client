import { subTasksKeys } from '@/api/keys/subTasks.keys'
import { tasksKeys } from '@/api/keys/tasks.keys'
import { subTasksService } from '@/api/services/subTasks.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const useDeleteSubTask = () => {
  const queryClient = useQueryClient()

  const { mutate: deleteSubtaskMutation } = useMutation({
    mutationKey: [subTasksKeys.DELETE],
    mutationFn: ({ taskId, id }: { taskId: string; id: string }) =>
      subTasksService.delete({ taskId, id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [subTasksKeys.GET_ALL] })
      queryClient.invalidateQueries({
        queryKey: [tasksKeys.GET_ALL],
      })
      toast.success('Successfully deleted')
    },
  })

  return { deleteSubtaskMutation }
}
