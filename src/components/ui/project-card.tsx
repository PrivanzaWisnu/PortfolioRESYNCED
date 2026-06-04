"use client"

import { Code2, ExternalLink } from "lucide-react"

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
    <div className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300">
      <div>
        <div className="flex items-center justify-between mb-4">
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

        <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {desc}
        </p>
      </div>

      <div>
        <div className="mt-5 flex items-center gap-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-xl bg-secondary text-secondary-foreground hover:bg-muted border border-border transition-all"
            title="View Source Code on GitHub"
          >
            <span>View Repository</span>
          </a>

          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-sm"
              title="View Live Website"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          )}
        </div>

        <div className="mt-10 flex flex-wrap gap-1.5">
          {tags.map((tag) => {
            const isSelected = searchQuery.toLowerCase() === tag.toLowerCase();
            return (
              <button
                key={tag}
                onClick={() => onTagClick(tag)}
                className={`text-[11px] font-medium px-2.5 py-1 rounded-lg border transition-all duration-200 ${
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary shadow-sm shadow-primary/20 scale-95"
                    : "bg-secondary text-secondary-foreground border-border hover:bg-muted hover:border-primary/30"
                }`}
              >
                {tag}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}