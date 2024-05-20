import { ITaskCard, TypeUpdateTaskCard } from '@/types/tasks.types'
import { UseFormWatch } from 'react-hook-form'
import { useTask } from './useTask'
import { Dispatch, SetStateAction, useCallback, useEffect } from 'react'
import debounce from 'lodash.debounce'
import { dateFormatter } from '@/api/utils/dateFormatter'

interface ITaskDebounce {
  watch: UseFormWatch<TypeUpdateTaskCard>
  projectId: string
  taskId: string
  setTasksState: Dispatch<SetStateAction<ITaskCard[] | undefined>>
}

export const useUpdateTaskDebounce = ({
  projectId,
  watch,
  taskId,
  setTasksState,
}: ITaskDebounce) => {
  const { useUpdateTask } = useTask()
  const { updateTaskMutation } = useUpdateTask()

  const debouncedUpdateTask = useCallback(
    debounce((dto: TypeUpdateTaskCard) => {
      updateTaskMutation(dto)
    }, 700),
    []
  )

  useEffect(() => {
    const { unsubscribe } = watch((dto) => {
      if (dto.title == '') return

      setTasksState((prevTasks) => {
        if (!prevTasks) return prevTasks

        return prevTasks.map((task) => {
          if (task.id === taskId) {
            return {
              ...task,
              ...dto,
              project: undefined,
              dueDate: task.dueDate,
            }
          }
          return task
        })
      })

      debouncedUpdateTask({
        ...dto,
        projectId,
        id: taskId,
        project: undefined,
      })
    })

    return () => {
      unsubscribe()
    }
  }, [watch(), debouncedUpdateTask])
}
