import { tasksKeys } from '@/api/keys/tasks.keys'
import { tasksService } from '@/api/services/tasks.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
export const useDeleteTask = () => {
  const queryClient = useQueryClient()

  const { mutate: deleteTaskMutation } = useMutation({
    mutationKey: [tasksKeys.DELETE],
    mutationFn: ({
      projectId,
      taskId,
    }: {
      projectId: string
      taskId: string
    }) => tasksService.delete(projectId, taskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [tasksKeys.GET_ALL] })
      toast.success('Successfully deleted task')
    },
  })

  return { deleteTaskMutation }
}
