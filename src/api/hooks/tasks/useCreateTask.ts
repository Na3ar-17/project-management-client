import { tasksKeys } from '@/api/keys/tasks.keys'
import { tasksService } from '@/api/services/tasks.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const useCreateTask = () => {
  const queryClient = useQueryClient()

  const { mutate: createTaskMutation } = useMutation({
    mutationKey: [tasksKeys.CREATE],
    mutationFn: (projectId: string) => tasksService.create(projectId),
    onSuccess: () => {
      queryClient.invalidateQueries()
      toast.success('Successfully created task')
    },
  })

  return { createTaskMutation }
}
