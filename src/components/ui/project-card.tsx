"use client"

import { Code2, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card" 
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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
  return (
    <Card className="relative flex flex-col justify-between border-border bg-card shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 group">
      <div>
        <CardHeader className="p-6 pb-0 space-y-4">
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-xl bg-muted group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
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

      <CardContent className="p-6 pt-0">
        {/* Action Buttons */}
        <div className="mt-5 flex items-center gap-4">
          <Button variant="outline" size="sm" className="flex-1 rounded-xl font-semibold" asChild>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" title="View Source Code on GitHub">
              <span>View Repository</span>
            </a>
          </Button>

          {demoLink && (
            <Button size="sm" className="flex-1 rounded-xl font-semibold shadow-sm" asChild>
              <a href={demoLink} target="_blank" rel="noopener noreferrer" title="View Live Website">
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </Button>
          )}
        </div>

        {/* Interactive Tags */}
        <div className="mt-10 flex flex-wrap gap-1.5">
          {tags.map((tag) => {
            const isSelected = searchQuery.toLowerCase() === tag.toLowerCase();
            return (
              <button key={tag} onClick={() => onTagClick(tag)} className="focus:outline-none">
                <Badge 
                  variant={isSelected ? "default" : "secondary"}
                  className={`text-[11px] px-2.5 py-1 rounded-lg border transition-all duration-200 cursor-pointer ${
                    isSelected ? "scale-95 shadow-sm shadow-primary/20" : "border-border hover:border-primary/30"
                  }`}
                >
                  {tag}
                </Badge>
              </button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}