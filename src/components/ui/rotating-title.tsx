"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { en } from "@/locales/en"
import { id } from "@/locales/id"
import { jp } from "@/locales/jp"

const titles = [
  en.sidebar.title,
  id.sidebar.title,
  jp.sidebar.title,
]

export function RotatingTitle() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false)
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length)
        setFade(true)
      }, 1000) 
      
    }, 10000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-[120px] sm:min-h-[140px] md:min-h-[160px] flex items-center">
      <h1 
        className={cn(
          "font-bold truncate text-sm tracking-wider text-primary transition-opacity duration-1000 ease-in-out",
          fade ? "opacity-100" : "opacity-0"
        )}
      >
        {titles[currentIndex]}
      </h1>
    </div>
  )
}