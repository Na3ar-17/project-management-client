import { TypeCreateSubTask, TypeUpdateSubTask } from '@/types/tasks.types'
import { UseFormWatch } from 'react-hook-form'
import { useUpdateSubTask } from './useUpdateSubTask'
import { useCreateSubTask } from './useCreateSubTask'
import { useCallback, useEffect } from 'react'
import debounce from 'lodash.debounce'

interface IProps {
  watch: UseFormWatch<TypeUpdateSubTask>
  taskId: string
  id: string
}

export const useSubTaskDebounce = ({ watch, taskId, id }: IProps) => {
  const { updateSubTakMutation } = useUpdateSubTask()
  const { createSubTaskMutation } = useCreateSubTask()

  const debouncedUpdateSubTask = useCallback(
    debounce((dto: TypeUpdateSubTask) => {
      updateSubTakMutation({
        ...dto,
      })
    }, 700),
    []
  )

  const debouncedCreateSubTask = useCallback(
    debounce((dto: TypeCreateSubTask) => {
      createSubTaskMutation(dto)
    }, 700),
    []
  )

  useEffect(() => {
    const { unsubscribe } = watch((dto) => {
      if (id) {
        debouncedUpdateSubTask({
          ...dto,
          id,
          isCompleted: dto.isCompleted,
        })
      } else {
        debouncedCreateSubTask({
          title: dto.title || '',
          taskId: taskId,
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [watch(), debouncedUpdateSubTask, debouncedCreateSubTask])
}
