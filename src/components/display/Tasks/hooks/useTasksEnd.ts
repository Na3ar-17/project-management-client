import { Dispatch, SetStateAction } from 'react'
import { DropResult } from '@hello-pangea/dnd'
import { EnumTaskStatus, ITaskCard } from '@/types/tasks.types'
import { useUpdateTask } from '@/api/hooks/tasks/useUpdateTask'
import { filterStatus } from '../utils/filter-status'

export const useTasksEnd = ({
  projectId,
  setTasksState,
  tasks,
}: {
  projectId: string
  setTasksState: Dispatch<SetStateAction<ITaskCard[] | undefined>>
  tasks?: ITaskCard[]
}) => {
  const { updateTaskMutation } = useUpdateTask()

  const onDragEnd = (result: DropResult) => {
    const {
      destination,
      source: { index, droppableId },
    } = result

    if (!destination || destination.droppableId === droppableId) return
    const newStatus = filterStatus(destination.droppableId)

    setTasksState((prev) => {
      if (!prev) return prev

      const updated = prev.map((el) => {
        if (el.id === result.draggableId) {
          const isCompleted = newStatus === EnumTaskStatus.completed
          return {
            ...el,
            status: newStatus !== undefined ? newStatus : el.status,
            isCompleted,
          }
        }
        return el
      })

      return updated
    })

    updateTaskMutation({
      id: result.draggableId,
      projectId: projectId,
      status: newStatus,
    })
  }

  return { onDragEnd }
}
