import { TypeUpdateTaskCard } from '@/types/tasks.types'
import { UseFormWatch } from 'react-hook-form'
import { useUpdateTask } from './useUpdateTask'
import { useCallback, useEffect } from 'react'
import debounce from 'lodash.debounce'

interface ITaskDebounce {
  watch: UseFormWatch<TypeUpdateTaskCard>
  projectId: string
  taskId: string
}

export const useUpdateTaskDebounce = ({
  projectId,
  watch,
  taskId,
}: ITaskDebounce) => {
  const { updateTaskMutation } = useUpdateTask()

  const debouncedUpdateTask = useCallback(
    debounce((dto: TypeUpdateTaskCard) => {
      updateTaskMutation(dto)
    }, 700),
    []
  )

  useEffect(() => {
    const { unsubscribe } = watch((dto) => {
      debouncedUpdateTask({
        ...dto,
        assigneesers: [],
        projectId,
        id: taskId,
      })
    })

    return () => {
      unsubscribe()
    }
  }, [watch(), debouncedUpdateTask])
}
