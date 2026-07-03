"use client"

import { useSettingsStore } from "@/store/use-settings"
import { cn } from "@/lib/utils"

interface HighlightCardProps {
  title: string;
  description: string;
}

export function HighlightCard({ title, description }: HighlightCardProps) {
  const { reduceMotion } = useSettingsStore()

  return (
    <div 
      className={cn(
        "p-6 rounded-2xl border border-border bg-card transition-all duration-300 cursor-default",
        reduceMotion 
          ? "hover:bg-muted/60" 
          : "hover:bg-muted/50 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
      )}
    >
      <h3 className="font-bold text-xl mb-2 transition-colors duration-300 group-hover:text-primary">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}