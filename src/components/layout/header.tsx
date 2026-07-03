"use client"

import { useSidebar } from "@/store/use-sidebar"
import { useSettingsStore } from "@/store/use-settings"
import { Settings, Menu } from "lucide-react"
import { en } from "@/locales/en"
import { id } from "@/locales/id"
import { Button } from "@/components/ui/button"

export function Header() {
  const { toggle } = useSidebar()
  
  const { language, setLanguage, setSettingsOpen} = useSettingsStore()
  const t = language === 'en' ? en : id;

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en')
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur-md md:px-6">
      
      <Button 
        variant="outline"
        size="icon"
        onClick={toggle}
        className="h-9 w-9"
        aria-label="Toggle Sidebar"
      >
        <Menu className="w-4 h-4" />
      </Button>

      <div className="flex items-center gap-2 sm:gap-4">
        <Button 
          variant="outline"
          onClick={toggleLanguage}
          className="h-9 px-3 text-sm font-bold"
          title={t.header.languageSwitchTitle}
        >
          {t.header.language}
        </Button>

        <Button 
          variant="outline"
          onClick={() => setSettingsOpen(true)} 
          className="h-9 px-3 text-sm font-medium"
          title={t.header.openSettings}
        >
          <Settings className="w-4 h-4" /> 
          <span className="hidden sm:inline">{t.header.settingsLabel}</span>
        </Button>
        
      </div>
    </header>
  )
}