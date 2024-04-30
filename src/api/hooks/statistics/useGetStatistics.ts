import { statisticsKeys } from '@/api/keys/statistics.keys'
import { statisticsService } from '@/api/services/statistics.service'
import { useQuery } from '@tanstack/react-query'

export const useGetStatistics = (projectId: string) => {
  const {
    data: statisticsData,
    isFetching,
    isSuccess,
  } = useQuery({
    queryKey: [statisticsKeys.GET_ONE],
    queryFn: () => statisticsService.getByProjectId(projectId),
  })

  return { statisticsData, isFetching, isSuccess }
}
