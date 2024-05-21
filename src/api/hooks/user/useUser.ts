import { userKeys } from '@/api/keys/user.keys'
import { removeFromStorage } from '@/api/services/auth-toke.service'
import { userService } from '@/api/services/user.service'
import { useDashboard } from '@/hooks/useDashboard'
import { TypeUpdatePasswod, TypeUpdateProfile } from '@/types/user.type'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { error } from 'console'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useUser = () => {
  const { replace, push } = useRouter()
  const { DASHBOARD_PAGES } = useDashboard()
  const t = useTranslations('toast.user')
  const queryClient = useQueryClient()

  const useDeleteUser = () => {
    const { mutate: deleteUserMutation } = useMutation({
      mutationKey: [userKeys.DELETE],
      mutationFn: () => userService.delete(),
      onSuccess: () => {
        replace(DASHBOARD_PAGES.AUTH)
        removeFromStorage()
      },
    })
    return { deleteUserMutation }
  }
  const useGetByEmail = () => {
    const { mutate: getByEmailMutation, data } = useMutation({
      mutationKey: [userKeys.GET_BY_EMAIL],
      mutationFn: ({ data }: { data: { email: string } }) =>
        userService.getByEmail(data),
      onSuccess: (data) => {
        if (data.success) {
          toast.success('The link has been sent to your email', {
            duration: 5000,
          })
        } else {
          toast.error('Invalid email')
        }
      },
    })
    return { getByEmailMutation, data }
  }

  const useUpdatePassword = () => {
    //jwt expired
    const { data, mutate: updatePasswordMutation } = useMutation({
      mutationKey: [userKeys.UPDATE],
      mutationFn: (dto: TypeUpdatePasswod) => userService.updatePassword(dto),
      onSuccess: (data) => {
        toast.success('Password updated successfully', { duration: 3000 })
        replace(DASHBOARD_PAGES.AUTH)
      },
      onError: (e) => {
        console.log(e)
      },
    })
    return { updatePasswordMutation, data }
  }
  const useGetProfile = () => {
    const { data, isSuccess, isFetching } = useQuery({
      queryKey: ['profile'],
      queryFn: () => userService.getProfile(),
      retry: 3,
    })

    return { data, isSuccess, isFetching }
  }
  const useSearchUsers = () => {
    const queryClient = useQueryClient()
    const {
      mutate: searchUsersMutation,
      data,
      isPending,
    } = useMutation({
      mutationKey: [userKeys.SEARCH],
      mutationFn: (dto: { email: string }) => userService.searchByEmail(dto),
      onSuccess: () => {
        queryClient.invalidateQueries()
      },
    })
    return { searchUsersMutation, data, isPending }
  }
  const useUpdateProfile = () => {
    const { mutate: updateProfileMutation } = useMutation({
      mutationKey: [userKeys.USER + 'update_profile'],
      mutationFn: (dto: TypeUpdateProfile) => userService.update(dto),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['profile'] })
        toast.success(t('update'))
      },
    })

    return { updateProfileMutation }
  }
  return {
    useDeleteUser,
    useGetByEmail,
    useGetProfile,
    useSearchUsers,
    useUpdateProfile,
    useUpdatePassword,
  }
}
