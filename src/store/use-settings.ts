import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// 1. Data Type Definition
export type FontSize = 'small' | 'default' | 'large' | 'extra-large'
export type ThemeColorKey = 'primary' | 'secondary' | 'accent' | 'destructive'
export type Language = 'id' | 'en'

// 2. Interface
export interface SettingsStore {
  fontId: string
  fontSize: FontSize
  reduceMotion: boolean
  customColors: Partial<Record<ThemeColorKey, string>>
  language: Language
  isSettingsOpen: boolean
  
  // Data Converter Functions
  setFontId: (id: string) => void
  setFontSize: (size: FontSize) => void
  setReduceMotion: (reduce: boolean) => void
  setCustomColors: (colors: Partial<Record<ThemeColorKey, string>>) => void
  setLanguage: (lang: Language) => void
  setSettingsOpen: (isOpen: boolean) => void
}

// 3. Export Store Hook
export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      // Initial state with default values
      fontId: 'poppins', 
      fontSize: 'default',
      reduceMotion: false,
      customColors: {},
      language: 'en', // English by Default
      isSettingsOpen: false,
      
      // State update functions
      setFontId: (fontId) => set({ fontId }),
      setFontSize: (fontSize) => set({ fontSize }),
      setReduceMotion: (reduceMotion) => set({ reduceMotion }),
      setCustomColors: (customColors) => set({ customColors }),
      setLanguage: (language) => set({ language }),
      setSettingsOpen: (isSettingsOpen) => set({ isSettingsOpen }),
    }),
    { name: 'portfolio-settings' } // Name for localStorage key
  )
)