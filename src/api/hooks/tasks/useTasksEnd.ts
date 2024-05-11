// import { Dispatch, SetStateAction } from 'react'
// import { filterStatus } from './filterStatus'
// import { useUpdateTask } from './useUpdateTask'
// import { DropResult } from '@hello-pangea/dnd'
// import { EnumTaskStatus, ITaskCard } from '@/types/tasks.types'

// export const useTasksEnd = ({
//   projectId,
//   setTasksState,
// }: {
//   projectId: string
//   setTasksState: Dispatch<SetStateAction<ITaskCard[] | undefined>>
// }) => {
//   const { updateTaskMutation } = useUpdateTask()

//   const onDragEnd = (result: DropResult) => {
//     const { destination, source } = result

//     if (!destination) return

//     const destinationColumnId = result.destination?.droppableId

//     if (destinationColumnId === result.source.droppableId) return

//     const newStatus = filterStatus(destinationColumnId || '')

//     setTasksState((prev) => {
//       if (!prev) return prev
//       const updated = prev.map((el) => {
//         if (el.id === result.draggableId) {
//           return {
//             ...el,
//             status: newStatus !== undefined ? newStatus : el.status,
//           }
//         }

//         return el
//       })
//       return updated
//     })

//     setTasksState((prev) => {
//       if (!prev) return prev
//       const updated = prev.map((el) => {
//         if (el.status === EnumTaskStatus.completed) {
//           console.log(el.status)

//           return {
//             ...el,
//             status: EnumTaskStatus.completed,
//             isCompleted: true,
//           }
//         } else {
//           return {
//             ...el,
//             isCompleted: false,
//           }
//         }

//         return el
//       })
//       return updated
//     })

//     updateTaskMutation({
//       id: result.draggableId,
//       projectId: projectId,
//       status: newStatus,
//     })
//   }

//   return { onDragEnd }
// }

import { Dispatch, SetStateAction } from 'react'
import { filterStatus } from './filterStatus'
import { useUpdateTask } from './useUpdateTask'
import { DropResult } from '@hello-pangea/dnd'
import { EnumTaskStatus, ITaskCard } from '@/types/tasks.types'

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

    if (!destination || destination.droppableId === source.droppableId) return

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
