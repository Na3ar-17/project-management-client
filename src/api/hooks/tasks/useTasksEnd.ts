import { filterStatus } from './filterStatus'
import { useUpdateTask } from './useUpdateTask'
import { DropResult } from '@hello-pangea/dnd'

export const useTasksEnd = ({ projectId }: { projectId: string }) => {
  const { updateTaskMutation } = useUpdateTask()

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) result

    const destinationColumnId = result.destination?.droppableId

    if (destinationColumnId === result.source.droppableId) return

    const newStatus = filterStatus(destinationColumnId || '')

    updateTaskMutation({
      id: result.draggableId,
      projectId: projectId,
      status: newStatus,
    })
  }

  return { onDragEnd }
}
