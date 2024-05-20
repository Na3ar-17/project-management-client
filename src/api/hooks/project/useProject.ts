import { projectKeys } from '@/api/keys/project.keys'
import { projectService } from '@/api/services/project.service'
import { dateFormatter } from '@/api/utils/dateFormatter'
import { TypeUpdateProjectCard } from '@/types/project.types'
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import toast from 'react-hot-toast'

export const useProject = () => {
  const queryClient = useQueryClient()
  const t = useTranslations('toast.projects')

  const useCreateProject = () => {
    const { mutate: createProjectMutation } = useMutation({
      mutationKey: [projectKeys.CREATE],
      mutationFn: () => projectService.create(),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [projectKeys.GET_ALL] })
        toast.success(t('create'))
      },
    })

    return { createProjectMutation }
  }
  const useDeleteProject = () => {
    const { mutate: deleteProjectMutation } = useMutation({
      mutationKey: [projectKeys.DELETE],
      mutationFn: (id: string) => projectService.delete(id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [projectKeys.GET_ALL] })
        toast.success(t('delete'))
      },
    })

    return { deleteProjectMutation }
  }

  const useGetProjects = () => {
    const {
      data: projects,
      isFetching,
      isSuccess,
    } = useQuery({
      queryKey: [projectKeys.GET_ALL],
      queryFn: () => projectService.getAll(),
      retry: 3,
      select: (data) => {
        return data.map((project) => ({
          ...project,
          createdAt: dateFormatter(project.createdAt || ''),
        }))
      },
    })

    return { projects, isFetching, isSuccess }
  }

  const useUpdateProject = () => {
    const { mutate: updateProjectMutation } = useMutation({
      mutationKey: [projectKeys.UPDATE],
      mutationFn: (dto: TypeUpdateProjectCard) => projectService.update(dto),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [projectKeys.GET_ALL] })
        toast.success(t('update'))
      },
    })

    return { updateProjectMutation }
  }
  return {
    useCreateProject,
    useDeleteProject,
    useUpdateProject,
    useGetProjects,
  }
}
