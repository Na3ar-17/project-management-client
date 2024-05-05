import { UseFormWatch } from 'react-hook-form'
import { useSearchUsers } from './useSearchUsers'
import { useCallback, useEffect } from 'react'
import debounce from 'lodash.debounce'

interface IProps {
  watch: UseFormWatch<{ email: string }>
}

export const useSearchUsersDebounced = ({ watch }: IProps) => {
  const { data, searchUsersMutation, isPending } = useSearchUsers()

  const debouncedSearchUsers = useCallback(
    debounce((dto: { email: string }) => {
      searchUsersMutation(dto)
    }, 400),
    []
  )

  useEffect(() => {
    const { unsubscribe } = watch((dto) => {
      debouncedSearchUsers({ email: dto.email || '' })
    })

    return () => {
      unsubscribe()
    }
  }, [watch(), debouncedSearchUsers])
  return { data, isPending }
}
