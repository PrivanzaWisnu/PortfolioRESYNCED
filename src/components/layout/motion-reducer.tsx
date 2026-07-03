"use client"

import { useEffect } from "react"
import { useSettingsStore } from "@/store/use-settings"

export function MotionReducer() {
  const { reduceMotion, setReduceMotion } = useSettingsStore()

  useEffect(() => {
    // 1. Checks if the user has set "reduce motion" in their OS settings and updates the state accordingly
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    
    // Set the initial state based on the media query
    if (mediaQuery.matches && !reduceMotion) {
      setReduceMotion(true)
    }
  }, [setReduceMotion]) // Just run this effect once 

  useEffect(() => {
    // 2. Applies or removes the reduce motion class to the root element based on the state
    const root = document.documentElement
    if (reduceMotion) {
      root.classList.add("reduce-motion")
    } else {
      root.classList.remove("reduce-motion")
    }
  }, [reduceMotion])

  return null
}