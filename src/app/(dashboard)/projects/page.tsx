"use client"

import { useState } from "react"
import { useSettingsStore } from "@/store/use-settings"
import { en } from "@/locales/en"
import { id } from "@/locales/id"
import { PROJECTS_DATA } from "@/data/projects"
import { ProjectCard } from "@/components/ui/project-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FolderGit2, Search, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 260, damping: 25 }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.15 }
    }
  }

  return (
    <div className="flex flex-col gap-10 p-1">
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
        <div className="relative w-full md:w-80 flex-shrink-0 flex items-center">
          <Search className="absolute left-3 w-4 h-4 text-muted-foreground z-10" />
          <Input
            type="text"
            placeholder={t.projects.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-9 h-10 rounded-xl"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 p-0.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {searchQuery && (
        <div className="text-sm text-muted-foreground -mt-4">
          {t.projects.showing} <span className="font-semibold text-foreground">{filteredProjects.length}</span> {t.projects.projectsFor} "{searchQuery}"
        </div>
      )}

      {/* Projects Grid Layout */}
      {filteredProjects.length > 0 ? (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* 3. Bungkus list dengan AnimatePresence agar kartu yang hilang/muncul saat diketik memiliki transisi fade */}
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const statusText = project.status === "completed"
                ? (t.projects.projectStatus.completed)
                : (t.projects.projectStatus.inProgress)

              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  exit="exit"
                >
                  <ProjectCard
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
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-12 text-center rounded-2xl border border-dashed border-border bg-muted/20"
        >
          <p className="text-base font-medium text-foreground">{t.projects.noPrjF}</p>
          <p className="text-sm text-muted-foreground mt-1 max-w-xs">{t.projects.tryClear}</p>
          <Button
            size="sm"
            onClick={() => setSearchQuery("")}
            className="mt-4 rounded-xl shadow-sm"
          >
            {t.projects.clearSearch}
          </Button>
        </motion.div>
      )}
    </div>
  )
}