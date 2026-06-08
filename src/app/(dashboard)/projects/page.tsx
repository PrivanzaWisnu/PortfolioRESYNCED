"use client"

import { useState } from "react"
import { useSettingsStore } from "@/store/use-settings"
import { en } from "@/locales/en"
import { id } from "@/locales/id"
import { PROJECTS_DATA } from "@/data/projects"
import { ProjectCard } from "@/components/ui/project-card"
import { FolderGit2, Search, X } from "lucide-react"

export default function ProjectsPage() {
  const { language } = useSettingsStore()
  const t = language === 'en' ? en : id

  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const query = searchQuery.toLowerCase().trim()
    if (!query) return true

    const matchesTitle = project.title.toLowerCase().includes(query)
    const matchesDesc = project.desc.toLowerCase().includes(query)
    const matchesTags = project.tags.some((tag) => tag.toLowerCase().includes(query))

    return matchesTitle || matchesDesc || matchesTags
  })

  return (
    <div className="flex flex-col gap-10 p-1 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary flex items-center gap-3">
            <FolderGit2 className="w-8 h-8" />
            {t.menu.projects}
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            {t.projects?.description}
          </p>
        </div>

        {/* Search Input Box */}
        <div className="relative w-full md:w-80 flex-shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder={t.projects.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-9 py-2 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {searchQuery && (
        <div className="text-sm text-muted-foreground -mt-4">
          {t.projects.showing} <span className="font-semibold text-foreground">{filteredProjects.length}</span> {t.projects.projectsFor} "<span className="text-primary font-medium">{searchQuery}</span>"
        </div>
      )}

      {/* Projects Grid Layout */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const statusText = project.status === "completed"
              ? (t.projects.projectStatus.completed)
              : (t.projects.projectStatus.inProgress)

            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                desc={project.desc}
                githubLink={project.link}
                demoLink={project.demoLink}
                tags={project.tags}
                status={project.status}
                statusText={statusText}
                searchQuery={searchQuery}
                onTagClick={(tag) => setSearchQuery(tag)}
              />
            )
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center rounded-2xl border border-dashed border-border bg-muted/20">
          <p className="text-base font-medium text-foreground">
            {t.projects.noPrjF}
          </p>
          <p className="text-sm text-muted-foreground mt-1 max-w-xs">
            {t.projects.tryClear}
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="mt-4 text-xs font-semibold px-3 py-1.5 bg-primary text-primary-foreground rounded-xl shadow-sm hover:opacity-90 transition-opacity"
          >
            {t.projects.clearSearch}
          </button>
        </div>
      )}
    </div>
  )
}