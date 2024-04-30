import { TypeUpdateProjectCard } from '@/types/project.types'
import debounce from 'lodash.debounce'
import { useCallback, useEffect } from 'react'
import { UseFormWatch } from 'react-hook-form'
import { useUpdateProject } from './useUpdateProject'
import toast from 'react-hot-toast'

interface IProjectDebounce {
  watch: UseFormWatch<TypeUpdateProjectCard>
  projectId: string
}

export const useUpdateProjectDebounce = ({
  watch,
  projectId,
}: IProjectDebounce) => {
  const { updateProjectMutation } = useUpdateProject()

  const debouncedUpdateProject = useCallback(
    debounce((dto: TypeUpdateProjectCard) => {
      updateProjectMutation(dto)
    }, 700),
    []
  )

  useEffect(() => {
    const { unsubscribe } = watch((dto) => {
      debouncedUpdateProject({
        ...dto,
        id: projectId,
      })
    })

    return () => {
      unsubscribe()
    }
  }, [watch(), debouncedUpdateProject])
}
