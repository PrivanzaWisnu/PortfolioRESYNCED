"use client"

import { useEffect, useState } from "react"
import { useSettingsStore } from "@/store/use-settings"
import { useTheme } from "next-themes"
import { Monitor, Moon, Sun, Check } from "lucide-react"
import { fonts, DEFAULT_FONT_ID, FONT_SIZES } from "@/config/fonts"
import { cn } from "@/lib/utils"
import { en } from "@/locales/en"
import { id } from "@/locales/id"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function SettingsModal() {
  const settings = useSettingsStore()
  const { theme, setTheme } = useTheme()
  const [backup, setBackup] = useState<any>(null)

  const t = settings.language === 'id' ? id : en

  useEffect(() => {
    if (settings.isSettingsOpen) {
      setBackup({
        fontId: settings.fontId,
        fontSize: settings.fontSize,
        customColors: { ...settings.customColors },
        reduceMotion: settings.reduceMotion,
        theme: theme
      })
    }
  }, [settings.isSettingsOpen])

  const handleCancel = () => {
    if (backup) {
      settings.setFontId(backup.fontId)
      settings.setFontSize(backup.fontSize)
      settings.setCustomColors(backup.customColors)
      settings.setReduceMotion(backup.reduceMotion)
      setTheme(backup.theme || 'system')
    }
    settings.setSettingsOpen(false)
  }

  const handleReset = () => {
    settings.setFontId(DEFAULT_FONT_ID)
    settings.setFontSize('default')
    settings.setCustomColors({})
    settings.setReduceMotion(false)
    setTheme('system')
  }

  const activeClass = "bg-primary text-primary-foreground border-primary font-bold shadow-sm"
  const inactiveClass = "hover:bg-accent border-border text-foreground bg-background"

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: Object.values(fonts).map(f => f.load?.url ? `@import url('${f.load.url}');` : '').join('\n')
      }} />

      <Dialog open={settings.isSettingsOpen} onOpenChange={(open) => !open && handleCancel()}>
        <DialogContent className="w-full max-w-lg rounded-2xl p-0 overflow-hidden flex flex-col max-h-[85vh] gap-0 border border-border bg-background shadow-2xl">
          
          <DialogHeader className="p-5 border-b border-border bg-muted/20 flex flex-row items-center justify-between space-y-0">
            <DialogTitle className="text-xl font-bold tracking-tight">{t.settings.preferences}</DialogTitle>
          </DialogHeader>

          <div className="p-6 overflow-y-auto flex-1 space-y-8 text-sm">
            
            {/* Theme section */}
            <section className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{t.settings.appearance}</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'light', icon: Sun, label: t.settings.light },
                  { id: 'dark', icon: Moon, label: t.settings.dark },
                  { id: 'system', icon: Monitor, label: t.settings.system }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTheme(item.id)}
                    className={cn(
                      "flex flex-row sm:flex-col items-center justify-center gap-2 border p-3 rounded-xl transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring w-full",
                      theme === item.id ? activeClass : inactiveClass
                    )}
                  >
                    <item.icon className="w-5 h-5 shrink-0" />
                    <span className="text-xs font-medium break-words text-center">{item.label}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* Font Family */}
            <section className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{t.settings.fontFamily}</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {Object.values(fonts).map((font) => (
                  <button
                    key={font.id}
                    onClick={() => settings.setFontId(font.id)}
                    style={{ fontFamily: font.fontFamily }}
                    className={cn(
                      "border p-3 rounded-xl text-left transition-all relative overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-ring w-full flex items-center justify-between gap-2",
                      settings.fontId === font.id ? activeClass : inactiveClass
                    )}
                  >
                    <span className="block truncate text-sm">{font.name}</span>
                    {settings.fontId === font.id && <Check className="w-4 h-4 shrink-0" />}
                  </button>
                ))}
              </div>
            </section>

            {/* Font Size */}
            <section className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{t.settings.fontSize}</label>
              <div className="flex flex-wrap sm:flex-nowrap bg-muted/50 p-1 rounded-xl border border-border gap-1 sm:gap-0">
                {FONT_SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => settings.setFontSize(size)}
                    className={cn(
                      "flex-1 min-w-[70px] py-2 text-xs font-medium rounded-lg transition-all outline-none",
                      settings.fontSize === size ? "bg-background shadow-sm text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {t.settings.sizes[size]}
                  </button>
                ))}
              </div>
            </section>

            {/* Brand Color */}
            <section className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{t.settings.themeColor}</label>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-accent/30 p-4 rounded-xl border border-border w-full">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-inner shrink-0">
                  <input
                    type="color"
                    value={settings.customColors.primary || "#2563eb"}
                    onChange={(e) => settings.setCustomColors({ primary: e.target.value })}
                    className="absolute inset-0 w-[150%] h-[150%] -translate-x-[15%] -translate-y-[15%] cursor-pointer"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold truncate">{t.settings.pickThemeColor}</p>
                  <p className="text-xs text-muted-foreground truncate">Hex: {settings.customColors.primary || "#2563eb"}</p>
                </div>
              </div>
            </section>

            {/* Reduce Motion Switch */}
            <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-muted/20 rounded-xl border border-border w-full">
              <div className="space-y-0.5 min-w-0 flex-1">
                <label className="text-sm font-bold block">{t.settings.reduceMotion}</label>
                <p className="text-xs text-muted-foreground break-words">{t.settings.reduceMotionDesc}</p>
              </div>
              <button 
                onClick={() => settings.setReduceMotion(!settings.reduceMotion)}
                className={cn(
                  "w-12 h-6 rounded-full transition-colors relative outline-none shrink-0",
                  settings.reduceMotion ? "bg-primary" : "bg-muted-foreground/30"
                )}
              >
                <div className={cn(
                  "w-4 h-4 rounded-full bg-white absolute top-1 transition-all",
                  settings.reduceMotion ? "left-7" : "left-1"
                )} />
              </button>
            </section>

          </div>

          {/* Footer */}
          <div className="p-5 border-t border-border bg-muted/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button onClick={handleReset} className="text-sm font-bold text-destructive hover:underline bg-transparent border-none outline-none cursor-pointer self-start sm:self-auto">
              {t.settings.resetDefault}
            </button>
            <div className="flex gap-3 w-full sm:w-auto justify-end">
              <Button 
                variant="outline" 
                onClick={handleCancel} 
                className="flex-1 sm:flex-none px-5 h-10 rounded-xl font-bold"
              >
                {t.settings.cancel}
              </Button>
              <Button 
                variant="default" 
                onClick={() => settings.setSettingsOpen(false)} 
                className="flex-1 sm:flex-none px-5 h-10 rounded-xl font-bold shadow-lg"
              >
                {t.settings.saveChanges}
              </Button>
            </div>
          </div>

        </DialogContent>
      </Dialog>
    </>
  )
}