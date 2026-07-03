"use client"

import { Code2, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card" 
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useSettingsStore } from "@/store/use-settings"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string;
  desc: string;
  githubLink: string;
  demoLink?: string;
  tags: string[];
  status?: "completed" | "in-progress";
  statusText: string;
  searchQuery: string;
  onTagClick: (tag: string) => void;
}

export function ProjectCard({
  title,
  desc,
  githubLink,
  demoLink,
  tags,
  status,
  statusText,
  searchQuery,
  onTagClick
}: ProjectCardProps) {
  const { reduceMotion } = useSettingsStore()

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden"
    >
      <Card 
        className={cn(
          "relative flex flex-col justify-between border-border bg-card shadow-sm transition-all duration-300 group",
          reduceMotion 
            ? "hover:bg-accent/20 hover:border-primary/40" 
            : "hover:shadow-xl hover:-translate-y-1 hover:border-primary/50"
        )}
      >
        <div>
          <CardHeader className="p-6 pb-0 space-y-4">
            <div className="flex items-center justify-between">
              <div className={cn(
                "p-2.5 rounded-xl bg-muted text-muted-foreground transition-all duration-300",
                "group-hover:bg-primary/10 group-hover:text-primary",
                !reduceMotion && "group-hover:rotate-6"
              )}>
                <Code2 className="w-5 h-5" />
              </div>
              
              <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${
                status === "in-progress" 
                  ? "bg-amber-500/10 text-amber-500 border-amber-500/20" 
                  : "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
              }`}>
                {statusText}
              </span>
            </div>

            <CardTitle className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </CardTitle>
            
            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
              {desc}
            </p>
          </CardHeader>
        </div>

        <CardContent className="p-6 pt-0 mt-5">
          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="flex-1 rounded-xl font-semibold transition-transform active:scale-[0.98]" asChild>
              <a href={githubLink} target="_blank" rel="noopener noreferrer" title="View Source Code on GitHub">
                <span>View Repository</span>
              </a>
            </Button>

            {demoLink && (
              <Button size="sm" className="flex-1 rounded-xl font-semibold shadow-sm transition-transform active:scale-[0.98]" asChild>
                <a href={demoLink} target="_blank" rel="noopener noreferrer" title="View Live Website">
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/down:translate-y-0.5 transition-transform duration-200" />
                </a>
              </Button>
            )}
          </div>

          {/* Interactive Tags */}
          <div className="mt-8 flex flex-wrap gap-1.5">
            {tags.map((tag) => {
              const isSelected = searchQuery.toLowerCase() === tag.toLowerCase();
              return (
                <button key={tag} onClick={() => onTagClick(tag)} className="focus:outline-none">
                  <Badge 
                    variant={isSelected ? "default" : "secondary"}
                    className={cn(
                      "text-[11px] px-2.5 py-1 rounded-lg border transition-all duration-200 cursor-pointer",
                      isSelected 
                        ? "shadow-sm shadow-primary/20 bg-primary text-primary-foreground" 
                        : "border-border hover:border-primary/40 hover:bg-accent",
                      (!reduceMotion && isSelected) && "scale-95"
                    )}
                  >
                    {tag}
                  </Badge>
                </button>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}