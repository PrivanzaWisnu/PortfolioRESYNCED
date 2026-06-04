"use client"

import { useSidebar } from "@/store/use-sidebar"
import { useSettingsStore } from "@/store/use-settings"
import { Settings } from "lucide-react"
import { en } from "@/locales/en"
import { id } from "@/locales/id"


export function Header() {
  const { toggle } = useSidebar()
  
  const { language, setLanguage, setSettingsOpen} = useSettingsStore()
  const t = language === 'en' ? en : id;

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en')
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur-md md:px-6">
      
      {/* Hamburger button */}
      <button 
        onClick={toggle}
        className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-transparent hover:bg-accent hover:text-accent-foreground transition-colors"
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>

      <div className="flex items-center gap-2 sm:gap-4">
        <button 
          onClick={toggleLanguage}
          className="flex h-9 items-center justify-center gap-2 rounded-md border border-border bg-transparent px-3 text-sm font-bold hover:bg-accent hover:text-accent-foreground transition-colors"
          title={t.header.languageSwitchTitle}
        >
          {t.header.language}
        </button>

        {/* Settings Button */}
        <button 
          onClick={() => setSettingsOpen(true)} 
          className="flex h-9 items-center justify-center gap-2 rounded-md border border-border bg-transparent px-3 text-sm font-medium hover:bg-accent transition-colors"
          title={t.header.openSettings}
        >
          <Settings className="w-4 h-4" /> 
          <span className="hidden sm:inline">{t.header.settingsLabel}</span>
        </button>
        
      </div>
    </header>
  )
}