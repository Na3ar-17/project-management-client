import { create } from 'zustand'

type TypeState = {
  isOpen: boolean
  title: string
  idToDelete: string
}

type TypeAction = {
  onOpen: () => void
  onClose: () => void
  setTitle: (title: string) => void
  setIdToDelete: (idToDelete: string) => void
}

export type TypeDialog = TypeAction & TypeState

export const useDialog = create<TypeState & TypeAction>((set) => ({
  isOpen: false,
  idToDelete: '',
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  title: 'Are you absolutely sure?',
  setTitle: (title) => set({ title }),
  setIdToDelete: (idToDelete) => set({ idToDelete }),
}))
