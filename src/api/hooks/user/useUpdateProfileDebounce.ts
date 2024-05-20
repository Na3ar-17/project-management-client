import { useCallback, useEffect } from 'react'
import debounce from 'lodash.debounce'
import { TypeUpdateProfile } from '@/types/user.type'
import { useUser } from './useUser'
import { UseFormWatch } from 'react-hook-form'

interface IUserProfileDebounce {
  watch: UseFormWatch<TypeUpdateProfile>
}

export const useProfileDebounce = ({ watch }: IUserProfileDebounce) => {
  const { useUpdateProfile } = useUser()
  const { updateProfileMutation } = useUpdateProfile()

  const debouncedUpdateProfile = useCallback(
    debounce((dto: TypeUpdateProfile) => {
      updateProfileMutation(dto)
    }, 700),
    []
  )

  useEffect(() => {
    const { unsubscribe } = watch((dto) => {
      if (dto.fullName === '') return
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
