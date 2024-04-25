import { ITaskCard } from '@/types/tasks.types'
import { create } from 'zustand'

type TypeState = {
  isOpen: boolean
}

type TypeAction = {
  onOpen: () => void
  onClose: () => void
}

export type TypeDialog = TypeAction & TypeState

export const useSheet = create<TypeState & TypeAction>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
