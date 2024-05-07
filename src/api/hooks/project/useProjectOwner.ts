import { useGetOne } from '@/api/hooks/project/useGetOne'
import { useGetProfile } from '@/api/hooks/user/useGetProfile'
import { useEffect, useState } from 'react'

export const useProjectOwner = ({ projectId }: { projectId: string }) => {
  const {
    isFetching: isProjectFetching,
    isSuccess: isProjectSuccess,
    project,
  } = useGetOne(projectId)
  const {
    data: userData,
    isFetching: isUserDataFetching,
    isSuccess: isUserDataSuccess,
  } = useGetProfile()
  const [isOwner, setIsOwner] = useState<boolean>(false)

  useEffect(() => {
    if (
      !isProjectFetching &&
      isProjectSuccess &&
      project &&
      !isUserDataFetching &&
      isUserDataSuccess &&
      userData
    ) {
      setIsOwner(userData.id === project.ownerId)
    }
  }, [
    isProjectFetching,
    isProjectSuccess,
    project,
    isUserDataFetching,
    isUserDataSuccess,
    userData,
  ])

  if (isProjectFetching || isUserDataFetching) {
    return { isOwner: false, isLoading: true }
  }

  return { isOwner, isLoading: false }
}
