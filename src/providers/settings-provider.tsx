'use client'

import { useEffect } from 'react'
import {
  useSettingsStore,
  type FontSize,
  type ThemeColorKey,
} from '@/store/use-settings'
import { getFontById, DEFAULT_FONT_ID } from '@/config/fonts'
import { hexToHsl, autoForeground } from '@/lib/color'

const FONT_SIZE_MAP: Record<FontSize, string> = {
  small: '14px',
  default: '16px',
  large: '18px',
  'extra-large': '20px',
}

const FONT_LOADER_ID = 'settings-font-loader'

const COLOR_KEYS: ThemeColorKey[] = [
  'primary',
  'secondary',
  'accent',
  'destructive',
]

/**
 * Reads user settings from the Zustand store and applies them to the DOM:
 * - Loads the selected typeface (link / @import / @font-face)
 * - Sets the `--font-app` CSS custom property so Tailwind's `font-sans` picks it up
 * - Adjusts the root `font-size`
 * - Toggles the `reduce-motion` class on `<html>`
 * - Overrides theme color CSS variables when custom colors are set
 */
export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const fontId = useSettingsStore((s) => s.fontId)
  const fontSize = useSettingsStore((s) => s.fontSize)
  const reduceMotion = useSettingsStore((s) => s.reduceMotion)
  const customColors = useSettingsStore((s) => s.customColors)

  // Load and apply the selected font
  useEffect(() => {
    const font = getFontById(fontId) ?? getFontById(DEFAULT_FONT_ID)
    if (!font) return

    // Remove previous loader element
    document.getElementById(FONT_LOADER_ID)?.remove()

    if (font.load) {
      switch (font.load.type) {
        case 'link': {
          const link = document.createElement('link')
          link.id = FONT_LOADER_ID
          link.rel = 'stylesheet'
          link.href = font.load?.href || ""
          document.head.appendChild(link)
          break
        }
        case 'import': {
          const style = document.createElement('style')
          style.id = FONT_LOADER_ID
          style.textContent = `@import url('${font.load.url}');`
          document.head.appendChild(style)
          break
        }
        case 'font-face': {
          const style = document.createElement('style')
          style.id = FONT_LOADER_ID
          style.textContent = font.load.css || ""
          document.head.appendChild(style)
          break
        }
      }
    }

    // Set CSS custom property consumed by Tailwind's font-sans
    document.documentElement.style.setProperty('--font-app', font.fontFamily)

    return () => {
      document.getElementById(FONT_LOADER_ID)?.remove()
      document.documentElement.style.removeProperty('--font-app')
    }
  }, [fontId])

  // Apply root font size
  useEffect(() => {
    document.documentElement.style.fontSize = FONT_SIZE_MAP[fontSize]
    return () => {
      document.documentElement.style.fontSize = ''
    }
  }, [fontSize])

  // Apply reduce-motion class
  useEffect(() => {
    document.documentElement.classList.toggle('reduce-motion', reduceMotion)
    return () => {
      document.documentElement.classList.remove('reduce-motion')
    }
  }, [reduceMotion])

  // Apply custom theme colors
  useEffect(() => {
    const el = document.documentElement

    for (const key of COLOR_KEYS) {
      const hex = customColors[key]
      if (hex) {
        const hsl = hexToHsl(hex)
        el.style.setProperty(`--${key}`, hsl)
        el.style.setProperty(`--${key}-foreground`, autoForeground(hsl))
      } else {
        el.style.removeProperty(`--${key}`)
        el.style.removeProperty(`--${key}-foreground`)
      }
    }

    return () => {
      for (const key of COLOR_KEYS) {
        el.style.removeProperty(`--${key}`)
        el.style.removeProperty(`--${key}-foreground`)
      }
    }
  }, [customColors])

  return <>{children}</>
}
