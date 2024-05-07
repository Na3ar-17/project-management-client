import { projectKeys } from '@/api/keys/project.keys'
import { projectService } from '@/api/services/project.service'
import { dateFormatter } from '@/api/utils/dateFormatter'
import { useQuery } from '@tanstack/react-query'

export const useGetOne = (id: string) => {
  const {
    data: project,
    isSuccess,
    isFetching,
  } = useQuery({
    queryKey: [projectKeys.GET_ONE],
    queryFn: () => projectService.getOne(id),
    retry: 3,
    select: (data) => {
      return {
        ...data,
        end: dateFormatter(data.end),
      }
    },
  })

  return { project, isSuccess, isFetching }
}
