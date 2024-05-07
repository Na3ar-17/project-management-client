import { Dispatch, SetStateAction } from 'react'
import { filterStatus } from './filterStatus'
import { useUpdateTask } from './useUpdateTask'
import { DropResult } from '@hello-pangea/dnd'
import { ITaskCard } from '@/types/tasks.types'

export const useTasksEnd = ({
  projectId,
  setTasksState,
}: {
  projectId: string
  setTasksState: Dispatch<SetStateAction<ITaskCard[] | undefined>>
}) => {
  const { updateTaskMutation } = useUpdateTask()

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result

    if (!destination) return

    const destinationColumnId = result.destination?.droppableId

    if (destinationColumnId === result.source.droppableId) return

    const newStatus = filterStatus(destinationColumnId || '')

    setTasksState((prev) => {
      if (!prev) return prev
      const updated = prev.map((el) => {
        if (el.id === result.draggableId) {
          return {
            ...el,
            status: newStatus !== undefined ? newStatus : el.status,
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
