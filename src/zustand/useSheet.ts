import { ITaskCard } from '@/types/tasks.types'
import { create } from 'zustand'

type TypeState = {
  isOpen: boolean
  taskId: string
}

type TypeAction = {
  onOpen: () => void
  onClose: () => void
  setTaskId: (id: string) => void
}

export type TypeDialog = TypeAction & TypeState

export const useSheet = create<TypeState & TypeAction>((set) => ({
  isOpen: false,
  taskId: '',
  setTaskId: (id) => set({ taskId: id }),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
