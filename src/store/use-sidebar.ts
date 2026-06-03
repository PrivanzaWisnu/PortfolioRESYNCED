import { create } from "zustand"

interface SidebarStore {
  isOpen: boolean
  toggle: () => void
  setIsOpen: (isOpen: boolean) => void
}

export const useSidebar = create<SidebarStore>((set) => ({
  isOpen: true, // Default kebuka waktu web pertama kali di-load
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsOpen: (isOpen) => set({ isOpen }),
}))