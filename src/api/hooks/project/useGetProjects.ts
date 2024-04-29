import { projectKeys } from '@/api/keys/project.keys'
import { projectService } from '@/api/services/project.service'
import { dateFormatter } from '@/api/utils/dateFormatter'
import { useQuery } from '@tanstack/react-query'

export const useGetProjects = () => {
  const {
    data: projects,
    isFetching,
    isSuccess,
  } = useQuery({
    queryKey: [projectKeys.GET_ALL],
    queryFn: () => projectService.getAll(),
    select: (data) => {
      console.log(data)

      return data.map((project) => ({
        ...project,
        createdAt: dateFormatter(project.createdAt || ''),
      }))
    },
  })

  return { projects, isFetching, isSuccess }
}
