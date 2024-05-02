import { subTasksKeys } from '@/api/keys/subTasks.keys'
import { subTasksService } from '@/api/services/subTasks.service'
import { TypeCreateSubTask } from '@/types/tasks.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateSubTask = () => {
  const queryClient = useQueryClient()

  const { mutate: createSubTaskMutation } = useMutation({
    mutationKey: [subTasksKeys.CREATE],
    mutationFn: (dto: TypeCreateSubTask) => subTasksService.create(dto),
    onSuccess: () => {
      queryClient.invalidateQueries()
    },
  })

  return { createSubTaskMutation }
}
