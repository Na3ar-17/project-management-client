import { notificationsKeys } from '@/api/keys/notifications.keys'
import { notificationsService } from '@/api/services/notifications.service'
import { dateFormatter } from '@/api/utils/dateFormatter'
import { useQuery } from '@tanstack/react-query'

export const useGetAll = () => {
  const {
    data: notificationsData,
    isSuccess,
    isFetching,
  } = useQuery({
    queryKey: [notificationsKeys.GET_ALL],
    queryFn: () => notificationsService.getAll(),
    retry: 3,
    select: (data) => {
      return data.map((el) => ({
        ...el,
        createdAt: dateFormatter(el.createdAt || ''),
      }))
    },
  })

  return { notificationsData, isSuccess, isFetching }
}
