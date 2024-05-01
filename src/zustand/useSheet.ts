import { ITaskCard } from '@/types/tasks.types'
import { create } from 'zustand'

type TypeState = {
  isOpen: boolean
  expectedTaskId: string
}

type TypeAction = {
  onOpen: () => void
  onClose: () => void
  setExpectedTaskId: (id: string) => void
}

export type TypeDialog = TypeAction & TypeState

export const useSheet = create<TypeState & TypeAction>((set) => ({
  isOpen: false,
  expectedTaskId: '',
  setExpectedTaskId: (id) => set({ expectedTaskId: id }),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
