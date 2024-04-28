import { useCallback, useEffect } from 'react'
import debounce from 'lodash.debounce'
import { TypeUpdateProfile } from '@/types/user.type'
import { useUpdateProfile } from './useUpdateProfile'
import { UseFormWatch } from 'react-hook-form'

interface IUseProfileDebounce {
  watch: UseFormWatch<TypeUpdateProfile>
}

export const useProfileDebounce = ({ watch }: IUseProfileDebounce) => {
  const { updateProfileMutation } = useUpdateProfile()

  const debouncedUpdateProfile = useCallback(
    debounce((dto: TypeUpdateProfile) => {
      updateProfileMutation(dto)
    }, 700),
    []
  )

  useEffect(() => {
    const { unsubscribe } = watch((dto) => {
      debouncedUpdateProfile({
        ...dto,
        fullName: dto.fullName,
      })
    })

    return () => {
      unsubscribe()
    }
  }, [watch(), debouncedUpdateProfile])
}
